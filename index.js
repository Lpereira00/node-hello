
const http = require('http');
const port = process.env.PORT || 3000;
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
var data;

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPwd = process.env.DB_PWD;
const dbDatabase = process.env.DB_DATABASE;

// var my_database = mysql.createConnection({
//   host: dbHost,
//   port : dbPort,
//   user : dbUser,
//   password: dbPwd,
//   database: dbDatabase
// });

// my_database.connect(function(err){
//   if (err) throw err;
//   console.log("connected");
//   my_database.query("SELECT * from contacts", function(err,   result, fields){
//     if (err) throw err;
//     data = result;
//   });
// });

// router.get('/', function(req, res, next){
//   json = res.send(JSON.stringify(data));
// });
// module.exports = router;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! My Test Pipeline Test with env file \n'
  res.end("<p>"+msg+"</p>"+"<p>"+JSON.stringify(data)+"</p>");
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

