const Blog = require('../model/Blog')

const updateBlog = async (req,res,next)=>{
    const {title , description}= req.body;
    const blogId = req.params.id;
    let blog;
    try{
        blog = await Blog.findByIdAndUpdate(blogId,{
            title, description
          })
    }catch(err){
        return console.log(err)
    }
    if(!blog){
        return res.status(500).json({message:"Unable to Update The Blog"})
    }
    return res.status(200).json({blog})
}

module.exports = updateBlog;