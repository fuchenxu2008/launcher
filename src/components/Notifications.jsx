import React, { useState, useEffect } from 'react'

export default function Notifications() {
  const [title, setTitle] = useState('Loading Title...');

  useEffect(() => {
    const removeListener = window.ipc.on('updateTitle', (_, title) => setTitle(title));
    window.ipc.send('getTitleFromUrl', 'https://baidu.com/');

    return () => removeListener();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ad odio. Animi culpa impedit, totam repellat sint, aspernatur porro in delectus quos dolorum nesciunt vitae quis! Commodi sapiente iste iusto.</p>
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
