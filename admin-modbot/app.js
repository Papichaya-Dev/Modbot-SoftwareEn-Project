const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
// import routes
const users = require('./routes/api/users');
// const bucketListItemRoutes = require('./routes/api/trainbot')
const TrainbotwordRoutes = require('./routes/api/trainbotword')
const QuestionfromUsers = require('./routes/api/question')

// Initialize the app
const app = express();
app.use(cors())

// Middlewares
// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
// Json Body Middleware
app.use(bodyParser.json());


//DB Config
const db = require('./config/keys').mongoURI;
//Connect to MongoDB
mongoose
    .connect(db, { useUnifiedTopology:true, useNewUrlParser:true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
     return res.send("<h1>Hello World</h1>");
  });

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);
// Seting up the static directory

//Use Routes
app.use('/api/users',users);
// app.use('/api/bucketListItems', bucketListItemRoutes);
app.use('/api/Trainbotwords', TrainbotwordRoutes);

app.use('/api/Question', QuestionfromUsers);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.set('view options', {delimiter: '?'});

// app.use(express.json())
// app.use(express.urlencoded({ extended: false}))
// app.use(express.static(path.join(__dirname, 'public')))

//Server static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    
})
