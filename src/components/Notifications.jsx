import React, { useState, useEffect } from 'react'

export default function Notifications() {
  const [title, setTitle] = useState('Title');

  useEffect(() => {
    const removeListener = window.ipc.on('updateTitle', (_, title) => setTitle(title));
    window.ipc.send('getTitleFromUrl', 'https://baidu.com/');

    return () => removeListener();
  }, []);

  return (
    <div>
      {title}
    </div>
  )
}
