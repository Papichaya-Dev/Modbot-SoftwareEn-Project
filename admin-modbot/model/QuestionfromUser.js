const { Schema, model } = require('mongoose');

//Create Schema
const QuestionfromUserSchema = new Schema({
    userId : {
        type : String,
        required : true
    },
    suggestion : [{   
        text : {
            type : String,
            required : false
        },
    }],
    problem : [{   
        text : {
            type : String,
            required : false
        },
    }],
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
    }
})

const QuestionfromUser = model('questionfromusers', QuestionfromUserSchema)

module.exports = QuestionfromUser 