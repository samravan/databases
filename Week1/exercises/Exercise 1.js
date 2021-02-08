const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : '1234',
  database : 'meetup'
});

connection.connect();
const inviteeTableQuery = 'CREATE TABLE invitee(invitee_no INT, invitee_name Varchar(25), invited_by Varchar(25))';
const meetingTableQuery = 'CREATE TABLE meeting(room_no INT, room_name Varchar(25), floor_number INT)';
const roomTableQuery = 'CREATE TABLE room(meeting_no INT, meeting_title Varchar(25), starting_time time, ending_time time,room_no INT)'


function tableMaker(table) {
  connection.query(table , function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
}
tableMaker(inviteeTableQuery);
tableMaker(meetingTableQuery);
tableMaker(roomTableQuery);

const post  = [
    {invitee_no: 1,  invitee_name: 'Ali', invited_by: 'Co-1'},
    {invitee_no: 2,  invitee_name: 'Jamshid', invited_by: 'Co-2'},
    {invitee_no: 3,  invitee_name: 'Mina', invited_by: 'Co-3'},
    {invitee_no: 4,  invitee_name: 'Masood', invited_by: 'Co-4'},
    {invitee_no: 5,  invitee_name: 'Amir', invited_by: 'Co-5'}
];

const meeting = [
  {room_no: 101, room_name: 'Blue', floor_number: 1},
  {room_no: 102, room_name: 'Yellow', floor_number: 2},
  {room_no: 103, room_name: 'Red', floor_number: 3},
  {room_no: 104, room_name: 'Gray', floor_number: 5},
  {room_no: 105, room_name: 'Green', floor_number: 4},
];
const room = [
  {meeting_no: 1001, meeting_title: 'title 1', starting_time: '12:30:00', ending_time: '13:00:00', room_no: 101},
  {meeting_no: 1002, meeting_title: 'title 2', starting_time: '14:30:00', ending_time: '15:00:00', room_no: 103},
  {meeting_no: 1003, meeting_title: 'title 3', starting_time: '15:30:00', ending_time: '16:00:00', room_no: 104},
  {meeting_no: 1004, meeting_title: 'title 4', starting_time: '17:30:00', ending_time: '18:00:00', room_no: 105},
  {meeting_no: 1005, meeting_title: 'title 5', starting_time: '10:30:00', ending_time: '13:00:00', room_no: 102}
];

for(let i = 0; i < 5; i++) {
  connection.query('INSERT INTO invitee SET ?', post[i], function (error, results, fields) {
    if (error) throw error;
    // Neat!

  });
  connection.query('INSERT INTO meeting SET ?', meeting[i], function (error, results, fields) {
    if (error) throw error;
    // Neat!

  });
  connection.query('INSERT INTO room SET ?', room[i], function (error, results, fields) {
    if (error) throw error;
    // Neat!

  });
}

connection.end();
