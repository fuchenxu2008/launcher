import React, { useState, useEffect } from 'react'
import { notiUrl, notiDesc } from '../config'

export default function Notifications() {
  const [title, setTitle] = useState('Loading Title...');

  useEffect(() => {
    const removeListener = window.ipc.on('updateTitle', (_, title) => setTitle(title));
    window.ipc.send('getTitleFromUrl', notiUrl);

    return () => removeListener();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{notiDesc}</p>
    </div>
  )
}

const styles = {
  container: {
    paddingTop: '20%'
  },
  title: {
    color: '#2d2d2d'
  },
  description: {
    color: '#4d4d4d'
  }
}
