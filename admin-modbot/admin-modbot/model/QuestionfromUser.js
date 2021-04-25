const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionfromUserSchema = new Schema({
    userId : {
        type : String,
        required : false
    },
    suggestion : [
        {   
            text : {
                type : String,
                required : false
            },
            check_by : {
                type: String,
                required : false
            },
            completed : {
                type: Boolean,
                required: false
            }
        },
    ],
    problem : [
        {   
            text : {
                type : String,
                required : false
            },
            check_by : {
                type: String,
                required : false
            },
            completed : {
                type: Boolean,
                required: false
            }
        },
    ],
    currentQuestion : {
        type : Boolean,
        required : false 
    },
    currentProblem : {
        type : Boolean,
        required : false
    },
    date : {
        type : Date,
        default: Date.now
    },
    check_by : {
        type : String,
        required : false
    },
})

module.exports = QuestionfromUser = mongoose.model('questionfromuser', QuestionfromUserSchema);