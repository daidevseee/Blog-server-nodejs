// /models/post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  keyword: String,
  title: String,
  author: String,
  slug: String,
  content: String,
  thumbnail: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

module.exports = mongoose.model('Post', postSchema);
