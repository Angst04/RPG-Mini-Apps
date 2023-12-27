const express = require('express');
const router = express.Router();
const { sequelize } = require('../db');

router.get('/', (req, res) => {
   res.send('Hello, this is the root route!');
});

router.get('/getInventory/:id_tg', async (req, res, next) => {
   try {
      const id_tg = req.params.id_tg;
      const [results] = await sequelize.query(
         `SELECT * FROM inventories WHERE id_tg = :id_tg`,
         {
            replacements: { id_tg },
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
      next(error);
   }
});

module.exports = router;