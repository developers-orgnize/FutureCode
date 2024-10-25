const express = require('express');
const router = express.Router();
const Product = require('../models/Product.Model.js');



   
const{createProduct,getProducts, getProductById, updateProduct,deleteProduct}=require('../controller/Product.controller.js');
   

// const productController = require('../controller/Product.controller.js');
// router.post('/products', productController.createProduct);


// Route to create a new product

router.post('/', createProduct);

// Route to get all products
router.get('/', getProducts);

// Route to get a product by ID
router.get('/:id', getProductById);

// Route to update a product by ID
router.put('/:id', updateProduct);

// Route to delete a product by ID
router.delete('/:id',deleteProduct );

module.exports = router;

   