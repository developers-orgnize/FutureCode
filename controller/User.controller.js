const User = require('../models/User.Model.js');


//add functions

// Create a new product
const createuser =   async (req, res) => {
    try {
      
      //  const Product = await Product.create(req.body);

      const { user_name, email, password } = req.body;

      const newuser = new User({ user_name, email,password });
      const saved = await newuser.save();



      res.status(200).json(saved);
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
