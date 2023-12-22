import React from 'react';
import cardsData from '../data/cards.json';
import '../styles/CardList.css';

let tg = window.Telegram.WebApp;
tg.expand();

function CardList() {
   function sendID(cardID) {
      console.log(`Выбрана карта с ID ${cardID}`);
      tg.sendData(cardID);
      tg.close();
   };
   
   return (
      <div className='cardlist'>
         {cardsData.cards.map(card => (
         <button onClick={() => sendID(card.id)} className='card' key={card.id}>
            <img className='card-image' src={card.imagePath} alt="" />
            <h2 className='card-title'>{card.title}</h2>
            {/* <p className='card-desc'>{card.description}</p> */}
         </button>
         ))}
      </div>
   );
}

export default CardList;