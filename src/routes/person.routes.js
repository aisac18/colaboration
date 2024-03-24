const {Router} = require('express')

const router = Router()
const personController = require('../controllers/person.controller')

router.get('/', personController.conect)

module.exports = router