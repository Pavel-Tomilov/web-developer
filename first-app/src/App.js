import logo from './logo.svg';
import './App.css';
import Ccomponent from './Ccomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Ccomponent />
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
