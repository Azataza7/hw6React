import React, {useState} from 'react';
import './App.css';
import Square from '../components/GameSquare/Square';
import GameSquare from '../components/GameSquare/GameSquare';

function App() {

  return (
    <div className="App">
      <GameSquare/>
    </div>
  );
}

export default App;
