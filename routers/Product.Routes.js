const express = require('express');
const router = express.Router();
const Product = require('../models/Product.Model.js');
const{createProduct,getProducts, getProductById, updateProduct,deleteProduct}=require('../controller/Product.controller.js');
   
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id',deleteProduct );
module.exports = router;

