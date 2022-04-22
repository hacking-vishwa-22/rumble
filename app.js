//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://admin-angela:Test123@cluster0.nbxhk.mongodb.net/journalDB', {
  useNewUrlParser: true
});

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



const postSchema = {
  title: {
    type: String,
    required: [true, "Error! Enter data correctly"]
  },
  post: String
};


const Post = mongoose.model("Post", postSchema);


app.get("/home", function(req, res) {
      //console.log(posts);


      Post.find({}, function(err, results) {

        if (err) {
            console.log(err);
          } else {
            //console.log(results);
            res.render("home", {
              postArray: results
            });
          }
      });
      });




app.get("/",function(req,res){
  res.send("\index.html");
});


app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res) {
  //console.log(req.body.postTitle);

  const newPost = new Post({
    title: req.body.postTitle,
    post: req.body.postBody
  });
  newPost.save(function(err){
    if(!err){
      res.redirect("/home");
    }
  });
});


app.get("/posts/:postName", function(req, res) {
  const id = req.params.postName;
  Post.findById({_id: id},function(err,result){
    if(!err)
    {
      res.render("post", {
        element : result
      });
    }
  });
});


let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}
app.listen(port, function() {
  console.log("Server started on port 3000");
});
