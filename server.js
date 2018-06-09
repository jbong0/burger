var express  = require('express')
var app = express()
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
var controller = require("./controllers/burgers_controllers")


app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

var port = process.env.PORT || 3000

app.use(controller)

// app.get('/data', function(req, res){
//     res.send()
// })

app.listen(port)