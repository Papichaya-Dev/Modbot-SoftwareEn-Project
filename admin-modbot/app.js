const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
// import routes
const users = require('./routes/api/users');
const TrainbotwordRoutes = require('./routes/api/trainbotword');
const Busroutes = require('./routes/api/busroutes');
const stations = require('./routes/api/station');
const locations = require('./routes/api/locationmark');
const QuestionfromUsers = require('./routes/api/question');
const BusData = require('./routes/api/busdata');
const miniBusroutes = require('./routes/api/minibusroutes');
const JointStation = require('./routes/api/jointstations');
const Dashboard = require('./routes/api/dashboard');
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
app.use('/api/Trainbotwords', TrainbotwordRoutes);
app.use('/api/stations', stations);
app.use('/api/locationmarks', locations)
app.use('/api/Busroutes', Busroutes);
app.use('/api/Question', QuestionfromUsers);
//Use transportation routes
app.use('/api/Busdata', BusData);
app.use('/api/MiniBusroutes', miniBusroutes);
//Use Joint Stations route
app.use('/api/jointstation', JointStation);
//Use Dashboard
app.use('/api/dashboard', Dashboard);

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
