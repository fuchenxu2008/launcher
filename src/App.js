import { useState } from 'react';
import './App.scss';
import Carousel from './components/Carousel';
import Notifications from './components/Notifications';
import Icons from './components/Icons';
import Sponsor from './components/Sponsor';
import WindowBar from './components/WindowBar';

function App() {
  const [showSponsor, setShowSponsor] = useState(false);

  return (
    <div>
      <WindowBar />

      <button
        onClick={setShowSponsor.bind(this, !showSponsor)}
        style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 10 }}
      >
        sponsor
      </button>

      <div className={`App ${showSponsor ? 'hidden' : ''}`}>
        <div className="ads">
          <Carousel />
        </div>
        <div className="panel">
          <div className="notifications">
            <Notifications />
          </div>
          <div className="icons">
            <Icons />
          </div>
        </div>
      </div>

      <div className={`sponsor-page ${showSponsor ? '' : 'hidden'}`}>
        <Sponsor />
      </div>
    </div>
  );
}

export default App;
