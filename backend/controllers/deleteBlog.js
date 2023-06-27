const Blog = require('../model/Blog')

const deleteBlog = async (req,res,next) =>{
    const id = req.params.id;
    let blog;
  try{
    blog = await Blog.findOneAndRemove(id).populate('user')
    await blog.user.blogs.pull(blog)
    await blog.user.save()
  }catch(err){
    return console.log(err)
  }
  if(!blog){
    return res.status(500).josn({message:"Unable To Delete!"})
  }
  return res.status(200).json({message:"Successfully Deleted!"})
}
module.exports = deleteBlog;