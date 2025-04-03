const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')


router.get('/register',userController.registerview )


router.post('/register',userController.registerUser)


module.exports = router;