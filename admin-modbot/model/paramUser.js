const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const paramUserSchema = new Schema({
    id: String,
    paramUser: {
        type: String,
        required: true
    },
    paramBot: {
        type: String,
        required: true
    },
    words: {
        type: Array,
        required: true
    }
});


module.exports = paramUser = mongoose.model('userWords', paramUserSchema);