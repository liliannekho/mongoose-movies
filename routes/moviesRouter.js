const express = require('express')
const router = express.Router()
const movieCtrl = require('../controllers/moviesController')

//POST /movies: Accepst Movie Data and Creates A Movie
router.post('/', movieCtrol.create)
//GET /movies: Returns a list of all movies.
router.get('/', movieCtrol.index)
//GET /movies/:id: Gets An Individual Movie
router.get('/:id', movieCtrol.show)
//POST /performers: Accepts performer data and creates a new performer.
router.post('/:movieid/performers/:perfmerId', movieCtrl.addPerformer)


module.exports = router 