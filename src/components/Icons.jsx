import React from 'react'
import icon1 from '../icons/1.ico'
import icon2 from '../icons/2.ico'
import icon3 from '../icons/3.ico'
import icon4 from '../icons/4.ico'

export default function Icons() {
  function handleClick() {
    window.ipc.send('open_exe', 'D:\\Apps\\PotPlayer\\PotPlayerMini64.exe')
  }

  return (
    <div style={styles.icons}>
      {
        [icon1, icon2, icon3, icon4].map((icon, i) => (
          <div style={styles.wrapper} key={i}>
            <img src={icon} alt="" style={styles.icon} onClick={handleClick} />
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