const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
// Create the User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
=======
//Create Schema
const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    avatar : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default: Date.now
    },
    status : {
        type: String
    }

})
>>>>>>> 2703a2b890bf9bdfea9c3b5a06de03b6b12888a1

module.exports = User = mongoose.model('users', UserSchema);