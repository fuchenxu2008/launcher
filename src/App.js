import './App.scss';
import Carousel from './components/Carousel'
import Notifications from './components/Notifications'
import Icons from './components/Icons'
import WindowBar from './components/WindowBar'

function App() {
  return (
    <div className="App">
      <div className="ads">
        <Carousel />
      </div>
      <div className="panel">
        <WindowBar/>
        <div className="notifications">
          <Notifications />
        </div>
        <div className="icons">
          <Icons />
        </div>
      </div>
    </div>
  );
}

export default App;
