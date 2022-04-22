//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");


const app = express();


app.listen(3000,function(req,res){
  console.log("Successfully started at 3000");
});
