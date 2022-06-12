import React from 'react'
import { programs } from '../config'

export default function Programs() {
  function handleClick(exePath, name) {
    window.ipc.send('open_exe', [exePath, name])
  }

  return (
    <div style={styles.icons}>
      {
        programs.map((program, i) => (
          <div style={styles.wrapper} key={i}>
            <img src={`exeIcons/${program.icon}`} alt="" style={styles.icon} onClick={handleClick.bind(this, program.exePath, program.name)} />
            <span style={styles.label}>{program.name}</span>
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
    paddingBottom: '40%'
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