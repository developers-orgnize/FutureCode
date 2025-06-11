const User = require('../models/User.Model.js');

const createuser =   async (req, res) => {
    try {
      


      const { user_name, email, password } = req.body;

      const newuser = new User({ user_name, email,password });
      const saved = await newuser.save();



      res.status(200).json(saved);
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
module.exports = {
 createuser,
};