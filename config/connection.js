var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'burgers_db',
    password: ""
})

connection.connect(function(err){
   if (err) throw err
})


module.exports = connection 