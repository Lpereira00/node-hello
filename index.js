const http = require('http');
const port = process.env.PORT || 3000;
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
var data;
var json;

var my_database = mysql.createConnection({
  host: 'database-1.ceryvyudjtn7.us-east-1.rds.amazonaws.com',
  port : '3306',
  user : 'admin',
  password: 'admin123',
  database: 'test_node'
});

my_database.connect(function(err){
  if (err) throw err;
  console.log("connected");
  my_database.query("SELECT * from contacts", function(err,   result, fields){
    if (err) throw err;
    data = result;
  });
});

// router.get('/', function(req, res, next){
//   json = res.send(JSON.stringify(data));
// });
// module.exports = router;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! My Test Pipeline\n'
  res.end("<p>"+msg+"</p>"+"<p>"+JSON.stringify(data)+"</p>");
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

