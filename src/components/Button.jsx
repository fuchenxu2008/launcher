import React from 'react'

export default function Button({ children }) {
  return (
    <div style={styles.button}>
      {children}
    </div>
  )
}

const styles = {
  button: {
    alignSelf: 'center',
    backgroundColor: 'rgb(35, 35, 35)',
    padding: '20px 40px',
    color: 'white',
    fontSize: 18,
    // width: '80px',
    borderRadius: 30,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    userSelect: 'none',
  }
}