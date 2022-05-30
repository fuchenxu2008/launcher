import { useState } from 'react';
import './App.scss';
import Carousel from './components/Carousel';
import Notifications from './components/Notifications';
import Programs from './components/Programs';
import Sponsor from './components/Sponsor';
import WindowBar from './components/WindowBar';
import SponsorBtn from './components/SponsorBtn';

function App() {
  const [showSponsor, setShowSponsor] = useState(false);

  return (
    <div>
      <WindowBar showBack={showSponsor} goBack={setShowSponsor.bind(this, false)} />

      <div className={`App ${showSponsor ? 'hidden' : ''}`}>
        <div className="ads">
          <Carousel />
        </div>
        <div className="panel">
          <div className="notifications">
            <Notifications />
          </div>
          <div className="icons">
            <Programs />
          </div>
        </div>
      </div>

      <div className={`sponsor-page ${showSponsor ? '' : 'hidden'}`}>
        <Sponsor />
      </div>

      <SponsorBtn onClick={setShowSponsor.bind(this, !showSponsor)} />
    </div>
  );
}

export default App;
