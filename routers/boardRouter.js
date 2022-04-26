const express = require('express');
const boardRouter = express.Router();

const {
  getAllPost,
  uploadPost,
  moveUploadPost,
  readPost,
  deletePost,
  moveUpdatePost,
  updatePost,
} = require('../controllers/boardController');

boardRouter.get('/', getAllPost);
boardRouter.get('/post/:postId([0-9a-fA-F]{24})', readPost);

boardRouter.get('/newpost', moveUploadPost);
boardRouter.post('/newpost', uploadPost);

boardRouter.get('/post/deletepost/:postId([0-9a-fA-F]{24})', deletePost);

boardRouter.get('/post/newpost/:postId([0-9a-fA-F]{24})', moveUpdatePost);
boardRouter.post('/post/newpost/:postId([0-9a-fA-F]{24})', updatePost);


module.exports = boardRouter;
