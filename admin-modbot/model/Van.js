const { Schema, model } = require('mongoose')

const VanSchema = new Schema({
    van_no: {
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

const Van = model('Van', VanSchema)

module.exports = Van
