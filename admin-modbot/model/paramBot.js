const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const paramBotSchema = new Schema({
   paramBot: {
        type: String,
        required: true,
        unique: true
    },
    words: {
        type: Array,
        required: true
    }
});


module.exports = paramBot = mongoose.model('botWords', paramBotSchema);