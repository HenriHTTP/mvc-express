const express = require('express');
const router = express.Router();  
const PostController =  require('../controllers/PostController')



router.post("/createPost", PostController.createPostSave);

module.exports = router