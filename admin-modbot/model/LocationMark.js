const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const LocationMarkSchema = new Schema({
    location_no: {
        type: String,
        required: true,
    },
    location_name: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
})

module.exports = LocationMark = mongoose.model('locationmark', LocationMarkSchema);