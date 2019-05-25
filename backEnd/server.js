/***************************************************************************************************
 * Execution :  cmd > server.js
 * purpose   : chat application
 * 
 * 
 * @description 
 * @file     :   server.js
 * @overview :  simple chat application using socket io for two way communication
 *       
 * @module   :   Server.js.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  25/5/2019
 * 
 **********************************************************************************************************/


const http = require('http');

// to include all modules or all files
//which allows us to support HTTp protocol and socket.IO
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
/*body-parser parses your request and converts it into a 
format from which you can easily extract relevant information that you may need.*/
const bodyParser = require('body-parser');

/*Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
and exposes the resulting object (containing the keys and values) on req.body.*/
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as JSON and exposes the resulting object on req.body.
app.use(bodyParser.json());
var expressValidator = require('express-validator')
 app.use(expressValidator());
//importing socketIO to get connection between client and server.
var socketIO =require('socket.io');
var chatController = require('./controller/chatController');

const mongoose = require('mongoose');
const route = require('../backEnd/router/route');

var server = app.listen(3000, () => {
    console.log("Server is listening to port 3000");
})
const io = require('socket.io')(server);
//checking for events connection will be listening  for incoming sockets.
io.on('connection',function(socket){
    console.log("socket is connected");
    //started listening events  and socket.on wait for the event.whenever that event is triggered to callback
    //function is called
    socket.on('createMessage',function(message){
        //saving message to database
        chatController.message(message,(err,data)=>{
            if(err){
                console.log("Error on message");
                console.log(err);
            }else {
                console.log(message+ "in server");
                //io.emmit is used to emit the message to all sockets connected to it.
                io.emit('newMessageSingle',message);
            }
        })
        //socket emit disconnect event which will be called whenever client disconnect
        socket.on('disconnect',function(){
            console.log("socket disconnected..!!!")
        });
    });
});

app.use('/', route); // calling router

app.use(express.static('../frontend'));
mongoose.Promise=global.Promise;

const dbConfig = require('./config/dbConfiguration');

//app.use(express.static('/home/admin1/Desktop/chat application/chat/client'));

//connection to the mongo database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("successfully connected to database");
}).catch(err => {
    console.log("could not connect to the database");
    process.exit();
}); 