const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserlocationSchema = new Schema({
    userId : {
        type : String,
        required : true
    },
    startpoint : {
        type : String,
        required : true
    },
    endpoint : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default: Date.now
    }
})

module.exports = Userlocation = mongoose.model('userlocation', UserlocationSchema);