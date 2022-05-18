import React from 'react'

export default function SponsorBtn({ onClick }) {
  return (
    <div style={styles.button} onClick={onClick}>
      <i className='iconfont icon-back' style={styles.icon}></i>
    </div>
  )
}

const styles = {
  button: {
    cursor: 'pointer',
    userSelect: 'none',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgb(20, 20, 20, 0.2)',
    borderRadius: '50%',
    width: 150,
    height: 150,
    transform: 'translate(50%, 50%)',
  },
  icon: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    position: 'absolute',
    top: '25%',
    left: '25%',
    transform: 'translate(-25%, -25%)',
  }
}