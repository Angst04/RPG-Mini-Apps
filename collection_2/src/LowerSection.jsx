// LowerSection.js
import React from 'react';
import { motion } from 'framer-motion';

const cardCount = 10; // You can adjust this based on the number of cards you want

const LowerSection = () => {
  const cards = Array(cardCount).fill(null);

  return (
    <div className="lower-section">
      {cards.map((_, index) => (
        <motion.div
          key={index}
          className="card"
          drag
        >
          Card {index + 1}
        </motion.div>
      ))}
    </div>
  );
};

export default LowerSection;
