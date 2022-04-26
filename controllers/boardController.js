const Post = require('../models/board');

const getAllPost = async (request, response) => {
  try {
    const posts = await Post.find({}).limit(9);
    response.status(200).render('board', { posts });
  } catch (error) {
    response.status(400).send({ error: error.message })
  }
};

const moveUploadPost = (request, response) => {
  try {
    response.status(200).render('uploadPost');
  } catch (error) {
    response.status(400).send({ error: error.message });
  }
};

const uploadPost = async (request, response) => {
  try {
    const {
      body: {
        board_title,
        board_content,
        author_id,
        author_name
      },
    } = request;
    await Post.create({
      board_title,
      board_content,
      author_id,
      author_name
    });
    response.redirect(`/board`);
  } catch (error) {
    response.status(400).send({ error: error.message });
  }
};

const readPost = async (request, response) => {
  try {
    const {
      params: { postId },
    } = request;
    const post = await Post.findOne({ _id: postId });
    console.log('read')
    response.status(200).render('readPost', { post });
  } catch (error) {
    response.status(400).send({ error: error.message });
  }
};

const deletePost = async (request, response) => {
  try {
    const {
      params: { postId },
    } = request;
    await Post.deleteOne({ _id: postId });
    console.log('delete');
    response.redirect(`/board`);
  } catch (error) {
    response.status(400).send({ error: error.message });
  }
};

const moveUpdatePost = async (request, response) => {
  try {
    const {
      params: { postId },
    } = request;
    const post = await Post.findOne({ _id: postId });
    response.status(200).render('updatePost', { post });
  } catch (error) {
    response.status(400).send({ error: error.message });
  }
};

const updatePost = async (request, response) => {
  try {
    const {
      params: { postId },
      body: { board_title, board_content }
    } = request;
    await Post.findOneAndUpdate({ _id: postId }, { board_title, board_content });
    response.redirect(`/board/post/${postId}`);
  } catch (error) {
    response.status(400).send({ error: error.message });
  }
};

module.exports = {
  getAllPost,
  uploadPost,
  moveUploadPost,
  readPost,
  deletePost,
  moveUpdatePost,
  updatePost,
};
