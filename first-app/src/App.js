import logo from './logo.svg';
import './App.css';
import Fcomponents from './Fcomponents';
import Ccomponent from './Ccomponent';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponents name="Alex" />
        <Ccomponent numbers={[1, 2, 3]} />
        <Menu />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web developer blog
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web developer blog
        </a>
      </header>
    </div>
  );
}

export default App;
