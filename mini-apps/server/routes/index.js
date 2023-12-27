const express = require('express');
const router = express.Router();
const sequelize = require('../db');

router.get('/getInventory/:id_tg', async (req, res, next) => {
   try {
      const id_tg = req.params.id_tg;
      console.log(id_tg)

      if (isNaN(id_tg)) {
         return res.status(400).json({ message: 'Invalid id_tg' });
      }

      const results = await sequelize.query(
         'SELECT * FROM inventories WHERE id_tg = :id_tg',
         {
            replacements: { id_tg: parseInt(id_tg, 10) },
            type: sequelize.QueryTypes.SELECT,
         }
      );

      if (results.length === 0) {
         return res.status(404).json({ message: 'Inventory not found' });
      }

      const inventory = results[0];
      const cards = [];

      for (let i = 1; i <= 9; i++) {
         const cardId = inventory[`card_${i}`];

         const card = {
            id: cardId,
            title: `Title for ${cardId}`,
            imagePath: `/cards/${cardId}.png`,
            description: `Description for ${cardId}`,
         };
         cards.push(card);
      }
      res.json({ cards });
   } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
});

module.exports = router;
