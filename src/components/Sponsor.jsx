import React from 'react'
import logo1 from '../logos/1.png'
import logo2 from '../logos/2.png'
import logo3 from '../logos/3.png'
import logo4 from '../logos/4.png'
import logo5 from '../logos/5.png'
import logo6 from '../logos/6.png'
import logo7 from '../logos/7.png'
import logo8 from '../logos/8.png'
import logo9 from '../logos/9.png'
import logo10 from '../logos/10.png'
import logo11 from '../logos/11.png'
import logo12 from '../logos/12.png'
import logo13 from '../logos/13.png'
import logo14 from '../logos/14.png'
import logo15 from '../logos/15.png'

export default function Sponsor() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15]
  return (
    <div style={styles.container}>
      {
        logos.map((icon, i) => (
          <img src={icon} alt="" key={i} style={styles.logo} />
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