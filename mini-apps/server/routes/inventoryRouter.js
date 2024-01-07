const Router = require('express')
const router = new Router()
const sequelize = require('../db')
const fs = require('fs')

router.get('/getInventory/:id_tg', async (req, res) => {
   try {
      const id_tg = req.params.id_tg;

      if (isNaN(id_tg)) {
         return res.status(400).json({ message: 'Invalid id_tg' })
      }

      const results = await sequelize.query(
         'SELECT * FROM inventories WHERE id_tg = :id_tg',
         {
            replacements: { id_tg: parseInt(id_tg, 10) },
            type: sequelize.QueryTypes.SELECT,
         }
      );

      if (results.length === 0) {
         return res.status(404).json({ message: 'Inventory not found' })
      }

      const inventory = results[0]
      const cardsIds = []

      cardsIds.push(inventory.card_1)
      cardsIds.push(inventory.card_2)
      cardsIds.push(inventory.card_3)
      cardsIds.push(inventory.card_4)
      cardsIds.push(inventory.card_5)
      cardsIds.push(inventory.card_6)
      cardsIds.push(inventory.card_7)
      cardsIds.push(inventory.card_8)
      cardsIds.push(inventory.card_9)

      const cards = []
      for (let i = 0; i < cardsIds.length; i++) {
         const cardId = cardsIds[i]

         const jsonData = fs.readFileSync('data/cards.json', 'utf-8');
         const data = JSON.parse(jsonData);

         const matchingCard = data.cards.find(card => card.id === cardId)

         if (matchingCard) {
            const { id, title, description } = matchingCard

            const card = {
               id: id,
               title: title,
               imagePath: `images/cards/${id}.png`,
               description: description,
            }

            cards.push(card)
         }
      }

      res.json({ cards });
   } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
});

module.exports = router