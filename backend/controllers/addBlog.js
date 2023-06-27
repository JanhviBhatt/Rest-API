const mongoose = require('mongoose');
const Blog = require('../model/Blog');
const User = require('../model/User');

const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  try {
    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(400).json({ message: "Unable to find user by this ID" });
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    const blog = new Blog({
      title,
      description,
      image,
      user,
    });

    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({ blog });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An error occurred while adding the blog" });
  }
};

module.exports = addBlog;