const express = require('express')
const postController = require('../controllers/post.controller')
const router = express.Router();
const userMiddleware = require("../middleware/user.middleware");



router.get('/create',userMiddleware.authUser,postController.createPostView)


router.post('/create', userMiddleware.authUser,postController.createPostView)

module.exports = router;