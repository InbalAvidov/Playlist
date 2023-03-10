const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy = {}) {
    try {
        const criteria = {}
        if (filterBy.userId) {
            criteria['$or'] = [{ 'createdBy._id': filterBy.userId }, { 'shareWith': filterBy.userId }]
        }

        if (filterBy.page) {
            criteria.tags = { $regex: filterBy.page, $options: 'i' }
        }

        const collection = await dbService.getCollection('station')
        var stations = await collection.find(criteria).toArray()
        // console.log('stations:', stations)
        return stations
    } catch (err) {
        logger.error('cannot find stations', err)
        throw err
    }
}

async function getById(stationId) {
    try {
        const collection = await dbService.getCollection('station')
        const station = collection.findOne({ _id: ObjectId(stationId) })
        return station
    } catch (err) {
        logger.error(`while finding station ${stationId}`, err)
        throw err
    }
}

async function remove(stationId) {
    try {
        const collection = await dbService.getCollection('station')
        await collection.deleteOne({ _id: ObjectId(stationId) })
        return stationId
    } catch (err) {
        logger.error(`cannot remove station ${stationId}`, err)
        throw err
    }
}

async function add(station) {
    try {
        const collection = await dbService.getCollection('station')
        await collection.insertOne(station)
        return station
    } catch (err) {
        logger.error('cannot insert station', err)
        throw err
    }
}

async function update(station) {
    try {
        const stationToSave = {
            name: station.name,
            description: station.description,
            songs: station.songs,
            imgUrl: station.imgUrl,
            shareWith: station.shareWith,
            shareBy: station.shareBy
        }
        const collection = await dbService.getCollection('station')
        await collection.updateOne({ _id: ObjectId(station._id) }, { $set: stationToSave })
        return stationToSave
    } catch (err) {
        logger.error(`cannot update station ${stationId}`, err)
        throw err
    }
}

module.exports = {
    remove,
    query,
    getById,
    add,
    update
}
