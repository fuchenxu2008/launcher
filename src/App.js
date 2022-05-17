import { useState } from 'react';
import './App.scss';
import Carousel from './components/Carousel';
import Notifications from './components/Notifications';
import Icons from './components/Icons';
import Sponsor from './components/Sponsor';
import WindowBar from './components/WindowBar';
import Button from './components/Button';

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
          <Button onClick={setShowSponsor.bind(this, !showSponsor)}>赞助商</Button>
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
