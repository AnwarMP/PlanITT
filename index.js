//Get the express  framework
const express = require ('express');
const path = require('path');
const dotenv = require('dotenv')
const morgan = require('morgan')

//Load from db.js
const connectDB = require('./config/db')

//Load config
dotenv.config({path: './config/config.env'})

//Connect to mangoose db
connectDB()


//Initalize the express module  and assign to app variable
const app = express();

//Log for http requests
app.use(morgan('dev'))

//Port can be picked from environement variable process.env.PORT or 5000 is default port
const PORT = process.env.PORT || 5001

//Body Parser Middleware. Handles JSON
app.use(express.json());

app.use('/api/eventinfo',require('./routes/api/eventinfo'));

//Set a static folder using express. Any static file we can ad in this route
app.use(express.static(path.join(__dirname,'front_end')));


app.listen(PORT,() => console.log(`Sever started on port ${PORT}`));

