const express = require("express");
const { Sequelize, DataTypes } = require("sequelize"); // importing sequeize

const app = express();

//connection with database
//("anme of databse","userName", "password", "host, dialect")
// const db = new Sequelize("mysql","root","",{
//     host: 'localhost',
//     dialect: 'mysql',
// });

const db = new Sequelize('mysql://root:password@localhost:3306/your_database');

const connect = () => {
    db.authenticate()
  .then(() => {
    console.log('Connection established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err.message);
  });
}

connect();

// starting server
app.listen(3000, () => {
    console.log("Server is started");
    
});