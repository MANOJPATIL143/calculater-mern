//import npm packages
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

//initialize express application
const app = express();
//importing the database connection
const connectDB = require('./config/db');

const dotenv = require("dotenv");
dotenv.config();

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//to handle cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });
//connecting to the database of MongoDB Atlas
connectDB();

//Define routes
const adminRoutes = require('./routes/calculation.routes');
app.use('/api', adminRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Define the port
const PORT = process.env.PORT || 8000;
//Listening to server
app.listen(PORT, console.log(`Server is starting at ${PORT}`));




