const { Schema, model } = require('mongoose')

const BusSchema = new Schema({
    bus_no: {
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
    stations_no: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Bus = model('Bus', BusSchema)

module.exports = Bus