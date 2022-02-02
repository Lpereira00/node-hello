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
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "database-1.ceryvyudjtn7.us-east-1.rds.amazonaws.com",
  user     : "admin",
  password : "admin123",
  port     : "3306"
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();