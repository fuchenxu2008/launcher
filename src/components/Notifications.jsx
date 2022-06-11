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
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.description}>{notiDesc}</p>
    </div>
  )
}

const styles = {
  container: {
    paddingTop: '28%'
  },
  title: {
    color: '#2d2d2d',
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap'
  },
  description: {
    color: '#4d4d4d'
  }
}
