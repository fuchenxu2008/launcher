// Module to control the application lifecycle and the native browser window.
const { app, protocol, ipcMain, shell } = require('electron');
const { BrowserWindow } = require("electron-acrylic-window");
const os = require('os');
const path = require('path');
const url = require('url');
const child = require('child_process').execFile;
const axios = require('axios');
// const Store = require('electron-store');

// const store = new Store();

function isVibrancySupported() {
	// Windows 10 or greater
	return (
		process.platform === 'win32' &&
		parseInt(os.release().split('.')[0]) >= 10
	)
}

// Create the native browser window.
function createWindow() {
  let vibrancy = 'light'

	if (isVibrancySupported()) {
		// vibrancy = {
		// 	theme: 'light',
		// 	effect: 'acrylic',
		// 	useCustomWindowRefreshMethod: true,
		// 	disableOnBlur: true,
		// 	debug: false,
		// }
	}

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    // Set the path of an additional "preload" script that can be used to
    // communicate between node-land and browser-land.
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: false,
    resizable: false,
    icon: __dirname + '/icon.png',
    vibrancy,
  });

  // In production, set the initial browser path to the local bundle generated
  // by the Create React App build process.
  // In development, set it to localhost to allow live/hot-reloading.
  const appURL = app.isPackaged
    ? url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
      })
    : 'http://localhost:3000';
  mainWindow.loadURL(appURL);

  // Automatically open Chrome's DevTools in development mode.
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }
}

// Setup a local proxy to adjust the paths of requested files when loading
// them from the local production bundle (e.g.: local fonts, etc...).
function setupLocalFilesNormalizerProxy() {
  protocol.registerHttpProtocol(
    'file',
    (request, callback) => {
      const url = request.url.substr(8);
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    },
    (error) => {
      if (error) console.error('Failed to register protocol');
    }
  );
}

// This method will be called when Electron has finished its initialization and
// is ready to create the browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  setupLocalFilesNormalizerProxy();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
// There, it's common for applications and their menu bar to stay active until
// the user quits  explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// If your app has no need to navigate or only needs to navigate to known pages,
// it is a good idea to limit navigation outright to that known scope,
// disallowing any other kinds of navigation.
const allowedNavigationDestinations = 'https://my-electron-app.com';
app.on('web-contents-created', (event, contents) => {
  contents.on('will-navigate', (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);

    if (!allowedNavigationDestinations.includes(parsedUrl.origin)) {
      event.preventDefault();
    }
  });
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Window control
ipcMain.on('minimize', () => {
  const win = BrowserWindow.getFocusedWindow();
  win.minimize();
});
ipcMain.on('quit', () => {
  app.quit();
});

// Execute exe file
ipcMain.on('open_exe', (_, executablePath) => {
  child(executablePath, function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
  });
});

// Open url
ipcMain.on('open_link', (_, url) => {
  shell.openExternal(url);
});

// Get url title
let fetching = false;
ipcMain.on('getTitleFromUrl', (event, url) => {
  if (fetching) return;
  axios.get(url).then(res => {
    const title = res.data.match(/<title>(.*?)<\/title>/)[1];
    event.reply('updateTitle', title);
  })
});