// /controllers/postController.js
const Post = require('../models/post');

exports.createPost = async (req, res) => {
    const { keyword, title, author, slug, content, thumbnail, createdAt, updatedAt } = req.body;
  
    // Tạo một đối tượng Post mới với dữ liệu từ req.body
    const newPost = new Post({
      keyword: keyword,
      title: title,
      author: author,
      slug: slug,
      content: content,
      thumbnail: thumbnail,
      createdAt: createdAt || new Date(), // Nếu không cung cấp, sử dụng ngày hiện tại
      updatedAt: updatedAt
    });
  
    try {
      // Lưu post vào cơ sở dữ liệu
      const savedPost = await newPost.save();
      res.send(savedPost); // Gửi lại post đã lưu
    } catch (err) {
      res.status(400).send(err); // Gửi lỗi nếu có
    }
  };
exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find();
      res.send(posts);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  };
  
  exports.getPost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).send('Post not found');
      res.send(post);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  exports.updatePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!post) return res.status(404).send('Post not found');
      res.send(post);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  exports.deletePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      if (!post) return res.status(404).send('Post not found');
      res.send(post);
    } catch (err) {
      res.status(500).send(err);
    }
  };