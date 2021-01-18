const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Trainbot2Schema = new Schema({
    name: { type: String, unique: true },
    keyword: {
        type: String,
        required: true,
    },
    // Array of subdocuments
    wordtrain: [
        {
            text: {
                type: String,
                required: false
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = Trainbot = mongoose.model('trainbot', Trainbot2Schema);