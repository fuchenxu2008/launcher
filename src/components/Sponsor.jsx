import React from 'react'
import { logos } from '../config'

export default function Sponsor() {
  return (
    <div style={styles.container}>
      {
        logos.map((icon, i) => (
          <img src={`sponsorLogos/${icon}`} alt="" key={i} style={styles.logo} />
        ))
      }
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: 40,
    padding: 70,
  },
  logo: {
    width: 100,
    height: 100,
    justifySelf: 'center',
    alignSelf: 'center',
  }
}