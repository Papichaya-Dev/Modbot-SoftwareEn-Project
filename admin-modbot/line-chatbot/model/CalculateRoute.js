const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalculateRouteSchema = new Schema({
    userId : {
        type : String,
        required : true
    },
    startLatitude :{
        type : Number,
        required : false
    },
    startLongitude : {
        type : Number,
        required : false
    },
    startAddress : {
        type : String,
        required : false
    },
    endLatitude : {
        type : Number,
        required : false
    },
    endLongitude : {
        type : Number,
        required : false
    },
    endAddress : {
        type : String,
        required : false
    },
    isCalculateRoute : {
        type : Boolean,
        required : false
    },
    date : {
        type : Date,
        default: Date.now
    }
})

module.exports = CalculateRoute = mongoose.model('calculateroute', CalculateRouteSchema);