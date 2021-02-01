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
        required : true
    },
    startLatitude : {
        type : Number,
        required : true
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
        required : true
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