// App.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import './styles/App.css'; 

const App = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getInventory/1006757651');
        const data = await response.json();
        setInventory(data.cards);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Inventory</h1>
      <div className="card-container">
        {inventory.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
