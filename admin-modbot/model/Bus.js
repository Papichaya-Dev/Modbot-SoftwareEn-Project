const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusSchema = new Schema({
    busnum: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    startpoint: {
        type: String,
        required: true,
    },
    endpoint: {
        type: String,
        required: true,
    },
})

module.exports = Bus = mongoose.model('bustest', BusSchema);