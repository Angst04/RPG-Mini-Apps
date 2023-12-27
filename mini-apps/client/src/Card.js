// Card.js
import React from 'react';

const Card = ({ card }) => {
   return (
      <div className="card">
         <img src={card.imagePath} alt={card.title} />
         <h3>{card.title}</h3>
         <p>{card.description}</p>
      </div>
   );
};

export default Card;
