const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: {
    type: String
  },
  time: {
    type: Date
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
});

module.exports = mongoose.model('Post', postSchema);
