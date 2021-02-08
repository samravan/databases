var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',  // 127.0.0.1:3306
  user     : 'root',
  password : '2236164',
  database : 'meetup'
});

connection.connect();

connection.query('SELECT * from meeting', function (error, results, fields) {
  if (error) throw error;
  console.log(result);
});

connection.end();