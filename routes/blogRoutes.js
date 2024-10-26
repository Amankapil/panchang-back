const express = require('express');
const multer = require('multer');
const { getBlogs, createBlog, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');
const upload = require('../middleware/upload');

const router = express.Router();

// Routes
router.get('/', getBlogs); // GET all blogs
router.get('/:id', getBlogById); // GET a single blog by ID
router.post('/', upload.single('image'), createBlog); // CREATE a new blog
router.put('/:id', upload.single('image'), updateBlog); // UPDATE a blog by ID
router.delete('/:id', deleteBlog); // DELETE a blog by ID

module.exports = router;
