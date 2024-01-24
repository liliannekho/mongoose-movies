const express = require('express')
const router = express.Router()
const performerCtrl = require('../controllers/performerController')

//GET/perfor,ers: returns a list of all performers 
router.get('/', performerCtrl.index)
//POST/performer: Accepts performer data and creates new performer
router.post('/', performerCtrol.create)


module.exports = router