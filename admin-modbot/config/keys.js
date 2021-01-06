<<<<<<< HEAD
if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://NadiaNannapat:Nadia2543@cluster0.5m57f.mongodb.net/test/admin",
        secret: ''
    };
} else {
    module.exports = {
        mongoURI: "mongodb+srv://NadiaNannapat:Nadia2543@cluster0.5m57f.mongodb.net/test/admin",
        secret: ''
    };
=======
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else { 
    module.exports = require('./keys_dev');
>>>>>>> 2703a2b890bf9bdfea9c3b5a06de03b6b12888a1
}