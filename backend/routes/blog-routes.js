const express = require('express');
const getAllBlogs = require('../controllers/getAllBlogs')
const addBlog = require('../controllers/addBlog')
const updateBlog = require('../controllers/updateBlog')
const getById = require('../controllers/getById')
const deleteBlog = require('../controllers/deleteBlog')
const getByUserId = require('../controllers/getByUserId')

const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs)
blogRouter.post("/add",addBlog)
blogRouter.put('/update/:id',updateBlog)
blogRouter.get('/:id',getById)
blogRouter.delete('/delete/:id', deleteBlog)
blogRouter.get('/user/:id',getByUserId)

module.exports = blogRouter;