const { Schema, model } = require('mongoose')

const TrainbotSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Trainbot = model('trainbot', TrainbotSchema)

module.exports = Trainbot