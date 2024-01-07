import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/Inventory.css'

let tg = window.Telegram.WebApp;
tg.expand();

const Inventory = () => {
   const [inventory, setInventory] = useState([])

   const getInventory = async () => {
      try {
         const { data } = await axios.get('http://localhost:5000/api/inventory/getInventory/1006757651')
         setInventory(data.cards)
      } catch (e) {
         console.log(e)
      }
   };

   useEffect(() => {
      getInventory()
   }, []);

   function sendID(cardID) {
      console.log(`Выбрана карта с ID ${cardID}`);
      tg.sendData(cardID);
      tg.close();
   }

   return (
      <div className='Inventory'>
         <h1 className='inventory-title'>Inventory</h1>
         <div className="cards-container">
            {inventory.map((card) => (
               <button onClick={() => sendID(card.id)} key={card.id} className="card">
                  <img className='card-image' src={card.imagePath} alt="" />
                  <h3 className='card-title'>{card.title}</h3>
                  <p className='card-description'>{card.description}</p>
               </button>
            ))}
         </div>
      </div>
   )
}

export default Inventory;