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
}