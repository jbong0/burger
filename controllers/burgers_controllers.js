var express = require("express")
var router = express.Router()
var orm = require("../config/orm")
// var bodyparser = 
// var burger = require("../models/burger.js")

router.get("/", function(req,res){
    orm.selectAll(function(data){
        res.render('index', {items:data})       
    })
})

router.post("/add/:name", function(req,res){
    var name = req.params.name
    orm.insertOne(name, function(data){
        res.send(data)
    })
})

router.put("/", function(req,res){

})

router.delete("/", function(req,res){

}) 

module.exports = router