const { Schema, model } = require('mongoose')

const MiniBusSchema = new Schema({
    minibus_no: {
        type: String,
        required: true,
    },
    color: {
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
    stations: {
        type: Array,
        required: true,
    },
    fares: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const MiniBus = model('Minibus', MiniBusSchema)

module.exports = MiniBus
