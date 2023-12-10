// App.jsx
import React, { useState } from 'react';
import './styles/App.css';
import Ceil from './components/Ceil.jsx';
import Card from './components/Card.jsx';

function App() {
  const [ceilCoordinates, setCeilCoordinates] = useState([]);

  const handleCeilLayout = (index, rect) => {
    setCeilCoordinates((prev) => {
      const updatedCoordinates = [...prev];
      updatedCoordinates[index] = rect;
      return updatedCoordinates;
    });
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1>Коллекция</h1>
      </div>

      <div className='content'>
        <Ceil onCeilLayout={(rect) => handleCeilLayout(0, rect)} />
        <Ceil onCeilLayout={(rect) => handleCeilLayout(1, rect)} />
        {/* Add more Ceil components as needed */}
      </div>

      <div className='footer'>
        <Card ceilCoordinates={ceilCoordinates} />
        <Card ceilCoordinates={ceilCoordinates} />
      </div>
    </div>
  );
}

export default App;
