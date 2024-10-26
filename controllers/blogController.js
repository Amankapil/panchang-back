const multer = require('multer');
const Blog = require('../models/Blog');
const path = require('path');

// Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

// Get a blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the blog', error });
  }
};

// Create a blog
exports.createBlog = async (req, res) => {
  try {
    const { category, subCategory, title, description } = req.body;
    let imagePath = null;

    // Check if an image file was uploaded
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    const newBlog = new Blog({ category, subCategory, title, description, image: imagePath });

    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  } catch (error) {
    if (error instanceof multer.MulterError) {
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Server error', error });
    }
  }
};

// Update a blog
exports.updateBlog = async (req, res) => {
  try {
    const { category, subCategory, heading, content } = req.body;
    let updateData = { category, subCategory, heading, content };

    // Check if a new image file was uploaded
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });

    res.json({ message: 'Blog updated successfully', blog: updatedBlog });
  } catch (error) {
    res.status(500).json({ message: 'Error updating the blog', error });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: 'Blog not found' });

    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting the blog', error });
  }
};
