const Product = require('../models/Product.Model');

const createProduct =  async (req, res) => {
    try {
      const { name, quantity, price } = req.body;

      const newProduct = new Product({ name, quantity, price });
      const savedProduct = await newProduct.save();



      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const getProducts = async (req, res) => {
    try {

        const products = await Product.find({});


        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }``
};


const getProductById =  async (req, res) => {
    const { id } = req.params; 
    try {
        const product = await Product.findById(id); 
        if (!product) {
            return res.status(404).json({ message: 'Product not found' }); 
        }
        res.status(200).json(product); 
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};


const updateProduct =async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};


const deleteProduct = async (req, res) => {
    const { id } = req.params; 
    try {
        const deletedProduct = await Product.findByIdAndDelete(id); 
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' }); 
        }
        res.status(200).json({ message: 'Product deleted successfully' }); 
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};