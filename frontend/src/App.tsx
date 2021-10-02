import Button from '@material-ui/core/Button';
import React from 'react';
import './App.css';
import logo from './logo.svg';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Button color="primary" variant="contained">
        Button
      </Button>
    </header>
  </div>
);

export default App;