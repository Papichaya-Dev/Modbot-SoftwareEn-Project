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
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    how_to_go: {
        type: String,
        required: true,
    },
    bus_no: {
        type: Array,
        required: true,
    }
})

const Station = model('station', StationSchema)

module.exports = Station