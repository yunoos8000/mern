const express = require("express");
const app = express();
const mongoose = require('mongoose')
const {mongourl} = require('./config/keys')
const Wish = mongoose.model('wishs')

mongoose.connect(mongourl,{useNewUrlParser:true, useUnifiedTopology: true },()=>{
  // console.log("mongoDB Connected");
  
});

module.exports = (app) => {
  app.get("/", (req, res) => {
    //   res.sendFile(path.join(__dirname+'/index.html'));
    // res.sendFile(__dirname + "/index.html");
    Wish.find({}).then(data=>{
      res.render("home", { wish: data });
    });
  });

  app.get("/about", (req, res) => {
    res.render("about", "");
  });
  app.get("/home", (req, res) => {
    res.send({ msg: "Yunoos" });
  });

  app.get("/profile/:id", (req, res) => {
    data = {
      name: req.params.id,
    };
    res.render("home", { data: data });
  });

  app.post("/sent", (req, res) => {
   const Item = new Wish({
     wish:req.body.item
   });
   Item.save().then(data=>{
    console.log("Saved");
      res.send(data);
   }).catch(err=>{
     throw err;
   });


    // console.log(req.body.item);
    // data.push(req.body.item);
    // res.send(data);
  });

  app.delete("/delete/:id", (req, res) => {
    // data = data.filter((item, index) => (index != req.params.id));
    Wish.findOneAndDelete({wish:req.params.id}).then(data=>{
      console.log("Deleted");
      res.send(data);
    })
    
  });

  // app.post("/sent", (req, res) => {
  //   // console.log(req.body);
  //   // try {
  //   //   req.body = JSON.parse(Object.keys(req.body)[0]);
  //   // } catch (err) {
  //   //   req.body = req.body;
  //   // }
  //   console.log(req.body);

  //   res.end(req.method);
  //   // res.render("home", { data: data });
  // });
};
