const express = require('express')
const router = express.Router()
const mtController = require('../controllers/mtController')

router.get('/',mtController.homepage)

module.exports = router