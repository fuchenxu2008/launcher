import './App.scss';
import Carousel from './components/Carousel'
import Notifications from './components/Notifications'
import Icons from './components/Icons'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
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
        <Button>启动</Button>
      </div>
    </div>
  );
}

export default App;
