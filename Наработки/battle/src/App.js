import React from 'react';
import './App.css';

let tg = window.Telegram.WebApp;
tg.expand();

function App() {
  function sendID(cardID) {
    console.log(`Выбрана карта с ID ${cardID}`);
    tg.sendData(cardID);
    tg.close();
  }

  return (
    <div className="App">
      <button onClick={() => sendID('c_0001')} className='btn'>Карта 1</button>
      <button onClick={() => sendID('c_0002')} className='btn'>Карта 2</button>
    </div>
  );
}

export default App;