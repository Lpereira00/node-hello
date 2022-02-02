const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! My Test Pipeline\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var data;

var my_database = mysql.createConnection({
  host: 'database-1.ceryvyudjtn7.us-east-1.rds.amazonaws.com',
port : '3306',
user : 'admin',
password: 'admin123',
database: 'test-node'
});

my_database.connect(function(err){
  if (err) throw err;
  console.log("connected");
  my_database.query("SELECT * from $YOUR_TABLE", function(err,   result, fields){
    if (err) throw err;
    data = result;
  });
});
router.get('/', function(req, res, next){
res.send(JSON.stringify(data));
});
module.exports = router;