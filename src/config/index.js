export const ROOT_URL = 'http://118.190.21.245/CCalc/'

/**
 * 广告图片
 * imgUrl: 图片链接
 * link: pdf链接
 */
export const carousels = [
  {
    id: 10,
    imgUrl: '0.jpg',
    link: 'welcome.html',      
  },
  {
    id: 1,
    imgUrl: '1.jpeg',
    link: '041614585422.html',      
  },
  {
    id: 2,
    imgUrl: '2.jpeg',
    link: '041615072248.html',      
  },
  {
    id: 3,
    imgUrl: '3.jpeg',
    link: 'welcome.html', // 留空
  },
  {
    id: 4,
    imgUrl: '4.jpeg',
    link: '041615101977.html',      
  },
  {
    id: 5,
    imgUrl: '5.jpeg',
    link: '041614585422.html',      
  },
  {
    id: 6,
    imgUrl: '6.jpeg',
    link: '041615072248.html',      
  },
  {
    id: 7,
    imgUrl: '7.jpeg',
    link: 'welcome.html', // 留空
  },
  {
    id: 8,
    imgUrl: '8.jpeg',
    link: '041614585422.html',      
  },
  {
    id: 9,
    imgUrl: '9.jpeg',
    link: '041615101977.html',      
  },
].map(c => ({
  ...c,
  imgUrl: `${ROOT_URL}${c.imgUrl}`,
  link: `${ROOT_URL}${c.link}`
}))

/**
 * 程序
 * icon: 相对public/exeIcons的路径
 * exePath: exe文件绝对路径
 * name: 名称
 */
export const programs = [
  {
    icon: '1.ico',
    exePath: 'C:\\Program Files (x86)\\Feed Management Systems\\Brill Formulation\\BRMBW32.exe',
    name: '优化模块'
  },
  {
    icon: '2.ico',
    exePath: 'C:\\Program Files (x86)\\Feed Management Systems\\Brill Formulation\\WINMAINT.exe',
    name: '维护模块'
  },
  {
    icon: '3.ico',
    exePath: 'C:\\Program Files (x86)\\Common Files\\Feed Management Systems\\Foundation Utilities\\FMSFoundationUtilities.exe',
    name: '设置模块' 
  },
  {
    icon: '4.ico',
    exePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    name: '数据处理'
  },
]

/**
 * 汉化程序路径
 */
export const translatedPath = 'C:\\Program Files (x86)\\Feed Management Systems\\Brill Formulation\\translate.bat';

/**
 * 赞助商logo
 * 相对public/sponsorLogos的路径
 */
export const logos = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png'
]

/**
 * 用来显示notification的网页抓取链接
 */
export const notiUrl = `${ROOT_URL}hibrill.html`;

export const notiDesc = ''