var tedious = require('tedious')

var Connection = tedious.Connection;
var Request = tedious.Request;


var config={
    userName: 'testUser',
    password: 'Test2013',
    server: 'webapptestnodesql.database.windows.net',
    options: {
        database: 'WebAppTestNodeDB',
        encrypt: true,
        rowCollectionOnRequestCompletion: true
    }
}


var createUsers = function(callback) {
    var connection = new Connection(config);
    connection.on('connect', function(err) {
         if(err) {
             callback(err);
         }
         else {
             var request = new Request(
                 `
                 INSERT INTO users (name, email) VALUES ('Scott', 'scott@odetocode.com') 
                 INSERT INTO users (name, email) VALUES ('Allen', 'allen@odetocode.com')
                 `,
                 function(err, rowCount) {
                     callback(err, rowCount);
                 }
             );
             connection.execSql(request);
         }
    });
 
 };
 
 var queryUsers = function(callback) {
     var connection = new Connection(config);
     connection.on('connect', function(err) {
         if(err) {
             callback(err);
         } else {
             var request = new Request(
                 "SELECT * FROM users",
                 function(err, rowCount, rows) {
                     callback(err, rowCount, rows);
                 }
             );
             connection.execSql(request);
         }
     });
 };
 
 module.exports = {
     createUsers: createUsers,
     queryUsers: queryUsers
 };
 