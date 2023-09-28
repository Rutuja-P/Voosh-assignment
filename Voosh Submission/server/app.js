const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const allRoutes = require('./routes/allRoutes');
const cookieParser = require('cookie-parser');
var cors = require('cors')


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(cors())

// view engine
app.set('view engine', 'ejs');

//database connection
const dbURI = 'mongodb+srv://rutujarpatole:rutujap@cluster0.cza4ep4.mongodb.net/?retryWrites=true&w=majority';
//mongodb+srv://rutujarpatole:<password>@cluster0.cza4ep4.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

// routes

app.use(allRoutes);


