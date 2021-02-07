const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'masoud',
  password: 'masoudvash'
});

connection.connect();

connection.query('DROP DATABASE meetup', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.query('CREATE DATABASE meetup', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.query('USE meetup', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.query('CREATE TABLE Invitee(invitee_no INTEGER,invitee_name TEXT, invited_by TEXT)', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.query('CREATE TABLE Room(room_no INTEGER,room_name TEXT, floor_number INTEGER)', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.query('CREATE TABLE Meeting(meeting_no INTEGER,meeting_title TEXT, starting_time TEXT, ending_time TEXT, room_no INTEGER)', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

for (i = 1; i < 6; i++) {

  connection.query(`INSERT INTO Invitee(invitee_no, invitee_name,invited_by) value(${i},'Akabar${i}','Asghar${i}')`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
  connection.query(`INSERT INTO Room(room_no,room_name, floor_number) value(${i},'room${i}',${i})`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
  connection.query(`INSERT INTO Meeting(meeting_no ,meeting_title, starting_time, ending_time, room_no) value(${i},'title${i}',${i},${i + 1},${i})`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
}

connection.end();