var connection = require("../config/connection")
var orm = {
    selectAll:(cb) => {
        connection.query("SELECT * FROM burgers", function(err, results){
            cb(results)
        })
    },
    insertOne:(name, cb) => { 
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)",[name], function(err, results){
            cb(results)
        })
    },
    updateOne:() => {
     

    }
}

module.exports = orm
 













