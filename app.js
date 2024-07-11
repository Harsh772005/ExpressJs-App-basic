// var http = require('http');

// http.createServer(function (req, res) {
//     res.write("Harsh Bhanushali  updated");
//     res.end();
// }).listen(3000);


// console.log("this website run on this port http://localhost:3000 ")



// making url using express js
// Routing concept in js
const express=require('express');
const app=express();
const port =3000;

app.use(express.static('public'))

app.get('/',(req,res)=>{
    // res.send('Hello Harsh Bhanushali');
    res.sendFile(__dirname+"/home.html")
})
app.get('/home',(req,res)=>{
    // res.send('Hello Harsh Bhanushali');
    res.sendFile(__dirname+"/home.html")
})



app.get('/about',(req,res)=>{
    // res.send("About of Harsh Bhanushali");
    res.sendFile(__dirname+"/about.html")
})


app.get('/contact',(req,res)=>{
    // res.send("Here this is my Contact information");
    res.sendFile(__dirname+"/contact.html")
})


app.get('/process',(req,res)=>{
    var No1=parseInt(req.query.tx1);
    var No2=parseInt(req.query.tx2);
    var c=No1+No2;
    res.send("The sum of two number is "+c);
    console.log("The sum of two number is "+c);
})


app.get('/cake',(req,res)=>{
    res.send('Cake');
})

app.get('/cake/ahmedabad',(req,res)=>{
    res.send('Cake in Ahmedabad ');
})


app.get('/cake/surat',(req,res)=>{
    res.send('Cake in Surat');
})


app.listen(port,()=>{
    console.log(`server run on this server http://localhost:3000`);
})