//Modules installed
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// initiating express app
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/signup.html')
});

app.post("/names",(req,res)=>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    console.log(fname,lname,email);
});

app.listen(3000,()=>{
    console.log("Server is running");
});