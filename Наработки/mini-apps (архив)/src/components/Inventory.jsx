import React, { useState, useEffect } from 'react';
import '../styles/Inventory.css';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'pass', {
   dialect: 'postgres',
});

function Inventory() {
   const [cards, setCards] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await sequelize.query(
               'SELECT * FROM inventories WHERE id_tg = :id_tg',
               {
                  replacements: { id_tg: '' },
                  type: Sequelize.QueryTypes.SELECT,
               }
            );
            setCards(result[0]);
         } catch (error) {
            console.error('Error fetching data from the database: ', error);
         }
      };

      fetchData();
   }, []);

   function sendID(cardID) {
      console.log(`Выбрана карта с ID ${cardID}`);
      tg.sendData(cardID);
      tg.close();
   }

   return (
      <div className='inventory'>
         {cards.map((card) => (
            <button
               onClick={() => sendID(card.id)}
               className='card'
               key={card.id}
            >
               <img className='card-image' src={card.imagePath} alt='' />
               <h2 className='card-title'>{card.title}</h2>
            </button>
         ))}
      </div>
   );
}

export default Inventory;