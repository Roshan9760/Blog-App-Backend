const express = require("express");
const router = express.Router();


//Import Controller
const { dummyLink, likePost, unlikePost } = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController");
const { removeComment } = require("../controllers/removeComment.js"); 




//Mapping Create
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts); 
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.delete("/removeComment",removeComment);

//export
module.exports = router;
