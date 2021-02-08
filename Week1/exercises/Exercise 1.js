var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',  // 127.0.0.1:3306
  user     : 'hyfuser',
  password : '1234',
  database : 'meetup'
});

connection.connect();

connection.query('SELECT * from meeting', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();