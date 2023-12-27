import React, { useEffect, useState } from 'react';
import './styles/App.css';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const id_tg = 1006757651; // Replace with the actual id_tg
    fetch(`/api/getInventory/${id_tg}`)
      .then((response) => response.json())
      .then((data) => setCards(data.cards))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      {cards.map((card) => (
        <div key={card.id}>
          <img src={card.imagePath} alt={card.title} />
          <p>{card.title}</p>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
