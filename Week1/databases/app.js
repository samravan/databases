const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'hyfuser',
  password : '1234',
  database : 'new_world'
});

connection.connect();
const answer = 'DESCRIBE country'
const answer1 = 'SELECT name, population from country WHERE population > 8000000';
const answer2 = 'SELECT name FROM country WHERE name LIKE "%land%"'
const answer3 = 'SELECT name, population FROM city WHERE population BETWEEN 500000 AND 1000000'
const answer4 = 'SELECT name FROM country WHERE continent = "Europe"';
const answer5 = 'SELECT name FROM country ORDER BY SurfaceArea DESC '
const answer6 = 'SELECT name FROM city WHERE CountryCode = "nld"';
const answer7 = 'SELECT population FROM city WHERE name = "rotterdam"';
const answer8 = 'SELECT name, surfaceArea FROM country ORDER BY surfaceArea DESC LIMIT 10';
const answer9 = 'SELECT name, population FROM city ORDER BY population DESC LIMIT 10';
const answer10 = 'SELECT sum(population) FROM country';


connection.query(answer2, function (error, results, fields) {
  if (error) throw error;
  console.log(results)
});

connection.end();