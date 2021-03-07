const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const JointStationSchema = new Schema({
    joint_station : {
        type : String,
        required : true
    },
    latitude : {
        type : Number,
        required : true
    },
    longitude : {
        type : Number,
        required : true
    },
    bus_no : [
        {   
            first_parked_bus : {
                type : String,
                required : true
            },
            second_parked_bus : {
                type : String,
                required : true
            },
        }
    ],
})

module.exports = JointStation = mongoose.model('joint_station', JointStationSchema);