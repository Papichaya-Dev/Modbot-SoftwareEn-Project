const { Schema, model } = require('mongoose')

//Create Schema
const paramBotSchema = new Schema({
   paramBot: {
        type: String,
        required: true,
        unique: true
    },
    idwords: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('botWords', paramBotSchema);