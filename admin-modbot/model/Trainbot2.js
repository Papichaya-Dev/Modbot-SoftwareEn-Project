const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = Trainbot = mongoose.model('trainbot', TrainbotSchema);