import logo from './logo.svg';
import './sass/style.scss';
import Carousel from "./components/carousel/carousel"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Carousel>
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        </Carousel>
      </div>
    </div>
  );
}

export default App;


