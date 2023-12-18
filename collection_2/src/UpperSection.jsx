// UpperSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cellCount = 5; // You can adjust this based on the number of cells you want

const UpperSection = () => {
  const [cards, setCards] = useState(Array(cellCount).fill(null));

  const handleDrop = (index, card) => {
    const updatedCards = [...cards];
    updatedCards[index] = card;
    setCards(updatedCards);
  };

  return (
    <div className="upper-section">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="cell"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index, card)}
        >
          {card && <div className="card">{card}</div>}
        </motion.div>
      ))}
    </div>
  );
};

export default UpperSection;
