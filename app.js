// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: '*', // Thay thế với domain cụ thể của bạn hoặc '*' để chấp nhận tất cả
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Các phương thức HTTP cho phép
    allowedHeaders: ['Content-Type', 'Authorization'] // Các headers cho phép
  }));
app.use(express.json()); // Middleware để phân tích cú pháp JSON

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Định nghĩa routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
