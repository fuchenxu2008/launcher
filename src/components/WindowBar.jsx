import React, { useEffect } from 'react';

export default function WindowBar() {
  useEffect(() => {
    function init() {
      document.getElementById('min-btn').onclick = function () {
        window.ipc.send('minimize');
      };
      document.getElementById('close-btn').onclick = function () {
        window.ipc.send('quit');
      };
    }
    init();
  }, []);

  return (
    <div id="window-bar">
      <div id="window-bar-btns">
        <div id="min-btn">-</div>
        <div id="close-btn">x</div>
      </div>
    </div>
  );
}
