const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const routefile = require('./router/route');
var expressValidator = require('express-validator');

// create express app
const app = express();

 app.use(expressValidator());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())



// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to chat application"});
// });



app.use('/', routefile); 
const dbConfig = require('./config/dbConfiguration');
const mongoose = require('mongoose');
app.use(express.static('../frontend'));

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});