const express = require('express');
const router = express.Router();
const User = require('../models/User.Model');
const {createuser}=require('../models/User.Model');

router.post('/', createuser);

module.exports = router;