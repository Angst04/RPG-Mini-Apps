import React, { useState, useEffect } from 'react';

function App() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getInventory/:1006757651'); // Замените на свой путь
        const data = await response.json();
        setInventory(data.cards);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Вызывайте fetchData каждые, например, 5 секунд
    const intervalId = setInterval(fetchData, 5000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Inventory</h1>
      <ul>
        {inventory.map((card) => (
          <li key={card.id}>
            <img src={card.imagePath} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;