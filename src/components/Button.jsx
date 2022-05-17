import React from 'react'

export default function Button({ children, onClick }) {
  return (
    <div style={styles.button} onClick={onClick}>
      {children}
    </div>
  )
}

const styles = {
  button: {
    alignSelf: 'center',
    backgroundColor: 'rgb(35, 35, 35)',
    padding: '15px 30px',
    color: 'white',
    fontSize: 15,
    // width: '80px',
    borderRadius: 30,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    userSelect: 'none',
  }
}