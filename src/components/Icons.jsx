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
          <img src={icon} alt="" key={i} style={styles.icon} onClick={handleClick} />
        ))
      }
    </div>
  )
}

const styles = {
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    cursor: 'pointer',
  }
}