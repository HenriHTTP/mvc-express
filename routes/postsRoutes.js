const express = require('express');
const router = express.Router();  
const PostController =  require('../controllers/PostController')



router.post("/createPost", PostController.createPostSave);
router.get("/home", PostController.ShowAllPost);
router.get('/drop/:id', PostController.DropPost )
router.get('/update/:id', PostController.UpdatePost )
router.post('/PostSave/:id' ,PostController.UpdatePostSave)
router.get('/create' ,PostController.createPost)

module.exports = router