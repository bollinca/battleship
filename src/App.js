import React from 'react';
import logo from './logo.svg';
import './App.css';

import ships from './Ships/Ships.js'


function App() {
  
  console.log(ships({length: 4, damageLocations: [2, 3], isSunk: false}));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
