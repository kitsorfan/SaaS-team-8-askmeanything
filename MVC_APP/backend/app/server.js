/*
    Ask Me Anything - Team 8
        Stylianos Kandylakis
        Kitsos Orfanopoulos
        Vasilis Papalexis
    ------------------------------------
    
    Backend  is based on: https://bezkoder.com/node-js-jwt-authentication-mysql/#Configure_MySQL_database_038_Sequelize

    In this file:
    🔸  1. we create an Express app, 
        then add body-parser and cors middlewares using app.use() method. 
        Notice that we set origin: http://localhost:8081.

    🔸  2. define a GET route which is simple for test.

    🔸  3. listen on port 8080 for incoming requests.

*/



const express = require("express");             // Express is for building the Rest apis
const bodyParser = require("body-parser");      // bodyParser helps to parse the request and create the req.body object
const cors = require("cors");                   // cors provides Express middleware to enable CORS

const app = express();                          // 1. create Express app


// Sync to DB
const db = require("../app/models");
db.sequelize.sync();

// Rest


var corsOptions = {                             // set origin
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));                     // add bodyParser

// parse requests of content-type - application/json 
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 2. define a GET route.
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Ask Me Anything-Team 8 App!😁 HELLO WORLD" });
});

// routes
require('../app/routes/auth.routes')(app);
require('../app/routes/user.routes')(app);
require('../app/routes/public/questionsPerKeyword.routes')(app);
require('../app/routes/public/questionsPerDay.routes')(app);
require('../app/routes/userCreate/newQuestion.routes')(app);



// set port, listen for requests

// 3. set port, listen for requests
const PORT = process.env.PORT || 8080;      // 8080 for http requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});