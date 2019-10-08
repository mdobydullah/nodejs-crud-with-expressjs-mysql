var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'USERNAME_HERE',
	password:'PASSWORD_HERE',
	database:'DATABASE_NAME_HERE'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;