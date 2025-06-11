const express = require('express');
const router = express.Router();
const User = require('../models/User.Model');
const {createuser}=require('../controller/User.controller');

router.post('/',createuser);

module.exports = router;