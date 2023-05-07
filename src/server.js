// Initialization 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./models/user');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mongoDbPath = "mongodb+srv://omayatestouri:ZACtNCmTToP7Bdpn@cluster0.cnk8p3t.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDbPath).then(function() {
  app.get("/",function(req,res){
    const response = { message: "API Works! "};
    res.json(response);

  }); 
  const userRouter = require('./routes/user');
  app.use("/users",userRouter);


}); 
  // Sarting the server on a PORT
  const PORT = process.env.PORT || 4989;
  app.listen(PORT,function(){
      console.log("Server started at PORT: " + PORT ); 
  }); 

 