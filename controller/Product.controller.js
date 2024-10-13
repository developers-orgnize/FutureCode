const Product = require('../models/Product.Model');


//add functions

// Create a new product
const createProduct =  async (req, res) => {
    try {
      
      //  const Product = await Product.create(req.body);

      const { name, quantity, price } = req.body;

      const newProduct = new Product({ name, quantity, price });
      const savedProduct = await newProduct.save();



      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



// Get all products
const getProducts = async (req, res) => {
    try {
        // Retrieve all products from the database
        const products = await Product.find({}); // Find all products

        // Respond with the list of products
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a product by ID
const getProductById =  async (req, res) => {
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
};

// Update a product by ID
const updateProduct =async (req, res) => {
    try {
        const { id } = req.params;//.Get the ID from the request parameters

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);// Return the updated product

    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle any errors
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    const { id } = req.params; // Extract the ID from the request parameters
    try {
        const deletedProduct = await Product.findByIdAndDelete(id); // Find and delete the product by ID
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' }); // Return 404 if product is not found
        }
        res.status(200).json({ message: 'Product deleted successfully' }); // Return success message
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle any errors
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};