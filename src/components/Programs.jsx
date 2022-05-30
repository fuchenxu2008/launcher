import React from 'react'
import icon1 from '../icons/1.ico'
import icon2 from '../icons/2.ico'
import icon3 from '../icons/3.ico'
import icon4 from '../icons/4.ico'

const programs = [
  {
    icon: icon1,
    exePath: 'C:\\Program Files (x86)\\Feed Management Systems\\Brill Formulation\\BRMBW32.exe',
  },
  {
    icon: icon2,
    exePath: 'C:\\Program Files (x86)\\Feed Management Systems\\Brill Formulation\\WINMAINT.exe',
  },
  {
    icon: icon3,
    exePath: 'C:\\Program Files (x86)\\Common Files\\Feed Management Systems\\Foundation Utilities\\FMSFoundationUtilities.exe',
  },
  {
    icon: icon4,
    exePath: 'D:\\Apps\\PotPlayer\\PotPlayerMini64.exe',
  },
]

export default function Programs() {
  function handleClick(exePath) {
    window.ipc.send('open_exe', exePath)
  }

  return (
    <div style={styles.icons}>
      {
        programs.map((program, i) => (
          <div style={styles.wrapper} key={i}>
            <img src={program.icon} alt="" style={styles.icon} onClick={handleClick.bind(this, program.exePath)} />
            <span style={styles.label}>加速器</span>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  icons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: '25%'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    cursor: 'pointer',
    marginBottom: 4
  },
  label: {
    fontSize: 11,
    color: '4d4d4d'
  }
}