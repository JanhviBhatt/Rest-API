const Blog = require('../model/Blog')

const getById = async(req,res,next)=>{
    const id = req.params.id;
    let blog;
    try{
      blog = await Blog.findById(id)
    }catch(err){
        return console.log(err)
    }
    if(!blog){
        return res.status(404).json({message:"No Blog Found!"})
    }
    return res.status(200).json({blog})
}
module.exports = getById;