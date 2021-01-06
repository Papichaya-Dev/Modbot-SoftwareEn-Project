const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

<<<<<<< HEAD
=======
const users = require('./routes/api/users');

>>>>>>> 2703a2b890bf9bdfea9c3b5a06de03b6b12888a1
// Initialize the app
const app = express();

// Middlewares
// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
<<<<<<< HEAD

// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Seting up the static directory
app.use(express.static(path.join(__dirname, 'public')));
=======
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
>>>>>>> 2703a2b890bf9bdfea9c3b5a06de03b6b12888a1

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);
<<<<<<< HEAD

// Bring in the Database Config and connect with the database
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});

app.get('/', (req, res) => {
    return res.send("<h1>Hello World</h1>");
});
// Bring in the Users route
const users = require('./routes/api/users');
app.use('/routes/api/users.js', users);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})
=======
// Seting up the static directory

// //Server static assets if in production
// if(process.env.NODE_ENV === 'production') {
//     //Set static folder
//     app.use(express.static('client/build'));

//     app.get('*',(req,res) => {
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     });
// }
//Use Routes
app.use('/api/users',users);

//Server static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

>>>>>>> 2703a2b890bf9bdfea9c3b5a06de03b6b12888a1

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
<<<<<<< HEAD
})
=======
    
})
>>>>>>> 2703a2b890bf9bdfea9c3b5a06de03b6b12888a1
