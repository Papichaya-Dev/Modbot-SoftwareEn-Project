const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const QuestionfromUserSchema = new Schema({
    userId : {
        type : String,
        required : true
    },
    question : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default: Date.now
    }
})

module.exports = QuestionfromUser = mongoose.model('questionfromuser', QuestionfromUserSchema);