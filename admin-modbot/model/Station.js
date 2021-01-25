const { Schema, model } = require('mongoose')

const StationSchema = new Schema({
    station_no: {
        type: String,
        required: true,
    },
    station_name: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    how_to_go: {
        type: String,
        required: true,
    },
    bus_no: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Station = model('station', StationSchema)

module.exports = Station