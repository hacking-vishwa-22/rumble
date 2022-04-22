//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.get("/",function(req,res){
  res.send("\index.html");
});

app.listen(3000,function(req,res){
  console.log("Successfully started at 3000");
});
