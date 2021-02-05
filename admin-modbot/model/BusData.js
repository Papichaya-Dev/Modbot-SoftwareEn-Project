const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const BusDataSchema = new Schema({
    bus_no : {
        type : Number,
        required : true
    },
    startingpoint : {
        type : String,
        required : true
    },
    destination : {
        type : String,
        required : true
    },
    bus_stop : [
        {   
            bus_stop_name : {
                type : String,
                required : true
            },
            latitude : {
                type : Number,
                required : true
            },
            longtitude : {
                type : Number,
                required : true
            },
        }
    ],
})

module.exports = BusData = mongoose.model('busdata', BusDataSchema);