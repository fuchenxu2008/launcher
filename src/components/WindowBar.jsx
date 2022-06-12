import React, { useEffect } from 'react';
import { translatedPath } from '../config'

export default function WindowBar({ showBack, goBack }) {
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

  function openTranslated() {
    window.ipc.send('open_exe', [translatedPath, '汉化'])
  }

  return (
    <div id="window-bar">
      <div id="window-bar-btns">
        {showBack && <div id="back-btn" onClick={goBack}>
          <i className="iconfont icon-back"></i>
        </div>}
        <div id="translate-btn" onClick={openTranslated}>
          <span className=''>汉</span>
        </div>
        <div id="min-btn">
          <i className='iconfont icon-minus'></i>
        </div>
        <div id="close-btn">
          <i className='iconfont icon-close'></i>
        </div>
      </div>
    </div>
  );
}
