const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'masoud',
  password: 'masoudvash',
  database: 'world'
});

const all = [];
connection.connect();

connection.query('SELECT name FROM country WHERE population > 1000000', function (error, results, fields) {
  if (error) throw error;
  all.push(results);
  console.log(all)
});
console.log(all)
connection.query("SELECT name FROM country WHERE name LIKE '%land%'", function (error, results, fields) {
  if (error) throw error;
  all.push(results);
});
connection.query("SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000", function (error, results, fields) {
  if (error) throw error;
  all.push(results);
});
connection.query("SELECT name FROM country WHERE continent = 'EUROPE'", function (error, results, fields) {
  if (error) throw error;
  all.push(results);
});
connection.query("SELECT name FROM country ORDER BY SurfaceArea DESC", function (error, results, fields) {
  if (error) throw error;
  all.push(results);
});
connection.query("SELECT name FROM city WHERE countrycode = 'NLD'", function (error, results, fields) {
  if (error) throw error;
  all.push(results);
});
connection.query("SELECT name, population FROM city WHERE name = 'Rotterdam'", function (error, results, fields) {
  if (error) throw error;
  all.push(results);
});
connection.query("SELECT name, SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10", function (error, results, fields) {
  if (error) throw error;
  all.push(results);
});
connection.query("SELECT name, population FROM country ORDER BY population DESC LIMIT 10", function (error, results, fields) {
  if (error) throw error;
  all.push(results);
});
connection.query("SELECT SUM(population) FROM country", function (error, results, fields) {
  if (error) throw error;
  all.push(results);
});




connection.end();

console.log(all)