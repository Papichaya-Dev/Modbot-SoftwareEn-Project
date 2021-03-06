const { Schema, model } = require('mongoose')

const BusSchema = new Schema({
    bus_no: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    way: {
        type: String,
        required: true,
    },
    aircon: {
        type: String,
        required: true,
    },
    starting_point: {
        type: String,
        required: true,
    },
    destination_point: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    stations: {
        type: Array,
        required: true,
    },
    fares: {
        type: Array,
        required: true,
    }
})

const Bus = model('Bus', BusSchema)

module.exports = Bus