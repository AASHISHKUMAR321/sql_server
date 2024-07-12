const mysql = require("mysql2");
require('dotenv').config()
const { DB_PORT, HOST, DB_USER, PASSWORD, DATABASE } = process.env;
const database = mysql.createConnection({
  host: HOST,
  user: DB_USER,
  port: DB_PORT,
  database: DATABASE,
  password: PASSWORD,
});

// module.exports = database;

// const { Sequelize } = require("sequelize");

// const database = new Sequelize("nem104_b37", "root", "12345678", {
//   host: "localhost",
//   dialect: "mysql",
// });

module.exports = database;
