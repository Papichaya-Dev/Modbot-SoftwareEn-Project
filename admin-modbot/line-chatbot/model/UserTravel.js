const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserTravelSchema = new Schema({
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
    startAddress : {
        type : String,
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
    endAddress : {
        type : String,
        required : false 
    },
    isConfirmTravel : {
        type : Boolean,
        required : false 
    },
})

module.exports = UserTravel = mongoose.model('usertravel', UserTravelSchema);