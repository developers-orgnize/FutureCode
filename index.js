const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// back-end  is running port 3000 


// response comming from node web-browser beacuse node js running envoronment
app.get('/', async (req, res) => {
    res.send(" hello from node api sandalu thushan ");
})

// product model


app.post ("/api/products",(req,res)=>{
    res.send("data recived")
    console.log(req.body);
    res.send(req.body);

});


//nodemon use for when refreshing web site thi application shlould be in this method


mongoose.connect('mongodb+srv://user1:Thush12213@cluster0.9qwykfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("connected to the database sandalu");

    app.listen(3000,()=>{
        console.log("server is running on port 3000");
    
    });
})
.catch((err)=>{
    console.log("connection is faild",err);
});

console.log("hello there")

// model

//mongodb+srv://user1:<db_password>@cluster0.9qwykfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0