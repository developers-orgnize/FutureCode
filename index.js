const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('./models/Product.Model');
const productRoute=require('./routers/Product.Routes.js')
const User = require('./models/User.Model.js');
const UserRoute=require('./routers/User.Routes.js');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/products", productRoute)
app.use("/api/signup", UserRoute)

app.get('/', async (req, res) => {
    res.send(" hello from node api sandalu thushan ");
})
// Connect to MongoDB

mongoose.connect('mongodb+srv://user1:Thush12213@cluster0.9qwykfs.mongodb.net/nodedb?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("connected to the database sandalu 🚀🚀🚀🚀");

    app.listen(3000,()=>{
        console.log("server is running on port 3000");
    
    });
})
.catch((err)=>{
    console.log("connection is faild",err);
});

console.log("hello there")

