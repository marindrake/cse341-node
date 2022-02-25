//Add
const cors = require('cors') // Place this with other requires (like 'path' and 'express')
const PORT = process.env.PORT || 8080;
//Add

const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

//Add
const corsOptions = {
    origin: "https://cse341shop4.herokuapp.com/",
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));
  
  const options = {
    family: 4
  };
  //Add

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/professional', feedRoutes);

app.listen(PORT);