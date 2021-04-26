const { Schema, model } = require('mongoose')

const TrainbotSchema = new Schema({
    keyword_no: {
        type: String,
        required: true,
    },
    keyword: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Trainbot = model('trainword', TrainbotSchema)

module.exports = Trainbot