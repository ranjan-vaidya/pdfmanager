const express = require("express");
const { createPost, deletePost, getAllPosts, commentOnPost, deleteComment } = require("../controller/post");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

//If logged-in (isAuthenticated) then only user can post (Files in middleware folder)
router.route("/post/upload").post(isAuthenticated,createPost)         //first isAuthenticated will run then createPost will        

router.route("/post/:id")
    .delete(isAuthenticated, deletePost)

router.route("/allposts").get(getAllPosts)              //No need to login to see posts

router.route("/post/comment/:id")
    .put(isAuthenticated, commentOnPost)
    .delete(isAuthenticated, deleteComment)

module.exports = router;