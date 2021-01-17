if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI : process.env.MONGODB_URI,
        secretOrKey: process.env.SECRET_OR_KEY
        
    };
} else { 
    module.exports = {
        mongoURI : 'mongodb+srv://NadiaNannapat:Nadia2543@cluster0.5m57f.mongodb.net/modbotdb?retryWrites=true&w=majority',
        secretOrKey: 'secret'
    
    };
}