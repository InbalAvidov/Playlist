const stationService = require('./station.service.js')

const logger = require('../../services/logger.service')
const { log } = require('../../middlewares/logger.middleware.js')


async function getStations(req, res) {

  try {
    const { userId, page } = req.query
    console.log('req.query:',req.query)
    const stations = await stationService.query({ userId, page })
    res.json(stations)
  } catch (err) {
    logger.error('Failed to get stations', err)
    res.status(500).send({ err: 'Failed to get stations' })
  }
}

async function getStationById(req, res) {
  try {
    const stationId = req.params.id
    const station = await stationService.getById(stationId)
    res.json(station)
  } catch (err) {
    logger.error('Failed to get station', err)
    res.status(500).send({ err: 'Failed to get station' })
  }
}

async function addStation(req, res) {
  try {
    const station = req.body
    delete station._id
    const addedStation = await stationService.add(station)
    res.json(addedStation)
  } catch (err) {
    logger.error('Failed to add station', err)
    res.status(500).send({ err: 'Failed to add station' })
  }
}

async function updateStation(req, res) {
  try {
    const station = req.body
    console.log('station:',station)
    const updatedStation = await stationService.update(station)
    res.json(updatedStation)
    console.log('updatedStation:',updatedStation)
    res.send(updateStation)
  } catch (err) {
    logger.error('Failed to update station', err)
    res.status(500).send({ err: 'Failed to update station' })
  }
}

async function removeStation(req, res) {
  try {
    const stationId = req.params.id
    const removedId = await stationService.remove(stationId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove station', err)
    res.status(500).send({ err: 'Failed to remove station' })
  }
}

async function addStationMsg(req, res) {
  const { loggedinUser } = req
  try {
    const stationId = req.params.id
    const msg = {
      txt: req.body.txt,
      by: loggedinUser
    }
    const savedMsg = await stationService.addStationMsg(stationId, msg)
    res.json(savedMsg)
  } catch (err) {
    logger.error('Failed to update station', err)
    res.status(500).send({ err: 'Failed to update station' })

  }
}

async function removeStationMsg(req, res) {
  const { loggedinUser } = req
  try {
    const stationId = req.params.id
    const { msgId } = req.params

    const removedId = await stationService.removeStationMsg(stationId, msgId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove station msg', err)
    res.status(500).send({ err: 'Failed to remove station msg' })

  }
}

module.exports = {
  getStations,
  getStationById,
  addStation,
  updateStation,
  removeStation,
  addStationMsg,
  removeStationMsg
}
