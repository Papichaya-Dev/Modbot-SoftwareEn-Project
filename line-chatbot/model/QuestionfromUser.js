const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const QuestionfromUserSchema = new Schema({
    userId : {
        type : String,
        required : true
    },
    suggestion : [
        {   
            text : {
                type : String,
                required : false
            },
        }
    ],
    problem : [
        {   
            text : {
                type : String,
                required : false
            },
        }
    ],
    currentQuestion : {
        type : Boolean,
        required : true 
    },
    currentProblem : {
        type : Boolean,
        required : false
    },
    date : {
        type : Date,
        default: Date.now
    }
})

module.exports = QuestionfromUser = mongoose.model('questionfromuser', QuestionfromUserSchema);