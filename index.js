const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product.Model');
const app = express();

app.use(express.json());

// back-end  is running port 3000 


// response comming from node web-browser beacuse node js running envoronment
app.get('/', async (req, res) => {
    res.send(" hello from node api sandalu thushan ");
})

// product model


// app.post ("/api/products",(req,res)=>{
//     res.send("data recived")
//     console.log(req.body);
//     res.send(req.body);

// });


app.post('/api/products', async (req, res) => {
    try {
      const product = await product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
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