var mysql = require('mysql');
var host = "172.17.0.2";
var pass = "123456"

var connMySQL = function(){
	return mysql.createConnection({
		host : host,
		user : 'root',
		password : pass,
		database : 'kaos'
	});
}

module.exports = function () {
	return connMySQL;
}