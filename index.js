//Get the express  framework
const express = require ('express');
const path = require('path');
const events = require('./events')
const logger = require('./middleware/logger');
//Initalize the express module  and assign to app variable
const app = express();

//init middleware 
//app.use(logger);

//body parser middlewhere
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Port can be picked from environement variable process.env.PORT or 5000 is default port
const PORT = process.env.PORT || 5000

//set a static folder for using the HTML files
app.use(express.static(path.join(__dirname,`public`)));

app.use('/api/eventapi', require('./routes/api/eventapi'));


app.listen(PORT,() => console.log(`Server started on port ${PORT}`));