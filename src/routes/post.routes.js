const express = require('express')
const postController = require('../controllers/post.controller')
const router = express.Router();




router.get('/create',postController.createPostView)

module.exports = router;