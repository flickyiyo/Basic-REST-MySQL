var mysql = require('mysql');
var connection = mysql.createConnection({
    'host':'my_host',
    'user':'my_user',
    'password': 'my_pass',
    'database':'test'
})//I've made a database called test, this database has a table called 'rest' with 4 fields:
//id as a primary key
//name and description as a varchar
//and price as a float
module.exports = connection;