const { Schema, model } = require('mongoose')

const MiniBusSchema = new Schema({
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
        type: Array
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const miniBus = model('Minibus', MiniBusSchema)

module.exports = miniBus