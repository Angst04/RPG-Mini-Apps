const Router = require('express')
const router = new Router()
const testController = require('../controllers/testController')

router.post('/registration', testController.registration)
router.get('/check', testController.check)

module.exports = router