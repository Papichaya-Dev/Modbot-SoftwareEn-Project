const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CheckBusStopSchema = new Schema({
    userId : {
        type : String,
        required : true
    },
    startLongitude : {
        type : Number,
        required : false
    },
    startLatitude : {
        type : Number,
        required : false
    },
    endLongitude : {
        type : Number,
        required : false 
    },
    endLatitude : {
        type : Number,
        required : false 
    },
    startAddress : {
        type : String,
        required : false
    },
    endAddress : {
        type : String,
        required : false 
    },
    isCheckBusStop : {
        type : Boolean,
        required : false 
    },
    busNumber : {
        type : String,
        required : false
    },
    date : {
        type : Date,
        default: Date.now
    }
})

module.exports = CheckBusStop = mongoose.model('checkbusstop', CheckBusStopSchema);