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
    display: 'flex',
    flexWrap: 'wrap',
    padding: 70,
  },
  logo: {
    // width: 100,
    height: 100,
    marginRight: 40,
    justifySelf: 'center',
    alignSelf: 'center',
  }
}