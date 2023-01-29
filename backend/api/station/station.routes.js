const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getStations, getStationById, addStation, updateStation, removeStation } = require('./station.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getStations)
router.get('/:id', getStationById)
router.post('/',requireAuth, addStation)
router.put('/:id',requireAuth, updateStation)
router.delete('/:id', requireAuth, removeStation)


module.exports = router