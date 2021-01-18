const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserStartPointSchema = new Schema({
    userId : {
        type : String,
        required : true
    },
    longitude : {
        type : Number,
        required : true
    },
    latitude : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true 
    },
    date : {
        type : Date,
        default: Date.now
    }
})

module.exports = UserStartPoint = mongoose.model('userstartpoint', UserStartPointSchema);