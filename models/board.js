const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    board_title: {
      type: String,
      required: true,
    },
    board_content: {
      type: String,
      required: true,
    },
    author_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const board = mongoose.model('board', boardSchema);
module.exports = board;
