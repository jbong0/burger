var mysql = require("mysql")

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
    var connection = mysql.createConnection(process.env.JAWSDB_URL)
    connection.end()

} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        database: 'burgers_db',
        password: ""
})

// Make the connection to MySQL
connection.connect(function(err) {
    if (err) {
      console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
      return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
  });
}
  // Export connection for ORM use
  module.exports = connection;