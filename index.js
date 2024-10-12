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


// GET route to fetch all products
app.get('/api/products', async (req, res) => {
    try {
        // Retrieve all products from the database
        const products = await Product.find({}); // Find all products

        // Respond with the list of products
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Define GET route to get a product by ID
app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters
    try {
        const product = await Product.findById(id); // Find the product by ID
        if (!product) {
            return res.status(404).json({ message: 'Product not found' }); // Return 404 if not found
        }
        res.status(200).json(product); // Return the found product
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle any errors
    }
});

app.post('/api/products', async (req, res) => {
    try {
      
      //  const Product = await Product.create(req.body);

      const { name, quantity, price } = req.body;

      const newProduct = new Product({ name, quantity, price });
      const savedProduct = await newProduct.save();



      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
//nodemon use for when refreshing web site thi application shlould be in this method


//get meetgod--> retrival data from the mongo db 




mongoose.connect('mongodb+srv://user1:Thush12213@cluster0.9qwykfs.mongodb.net/nodedb?retryWrites=true&w=majority&appName=Cluster0')
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