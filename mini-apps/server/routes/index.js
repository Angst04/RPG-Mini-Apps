const express = require('express')
const router = express.Router()
const inventoryRouter = require('./inventoryRouter')

router.use('/inventory', inventoryRouter)

module.exports = router;