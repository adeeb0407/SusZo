import mongoose from 'mongoose';
import ReplyModel from '../model/replyModel.js'
import BlogModel from '../model/BlogModel.js'

export const fetchBlogs = async (req, res) => {
    try {
        const fetchData = await BlogModel.find().sort({createdAt : -1}) //.limit(how many data you want)
        // const print = fetchData.map((dataItem) => dataItem._id);
        // const print = fetchData.filter((dataItem) => dataItem.title === 'Adseeb');
        res.status(200).json(fetchData)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
}

export const addBlog = async (req, res) => {

    console.log(req.body)
    const newData = new BlogModel({
    title : req.body.title,
    blogBody : req.body.blogBody,
    userId :  req.body.userId,
    });
    try {
    const createdData =  await newData.save();
    // const userRefId =await UserModel.updateOne(
    //     { _id: req.body.userId }, 
    //     { $push: { reply: createdData._id } }
    // );
    // console.log(userRefId)
    // const userData = await UserModel.findById(req.body.userId)
    res.json(createdData)
} catch (error) {
    res.status(404).json( {message : error.message} )
    }
}

export const fetchBlogWithId = async (req, res) => {
    try {
        const dataWithId = await BlogModel.findById(req.params.mainId)
        res.json(dataWithId)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
}

export const deleteBlogData = async (req, res) => {
    
    try {
        const deleteData =  await BlogModel.deleteOne({_id: req.params.mainId})
        console.log(`deleted Data`)
        res.json(deleteData)
    } catch (error) {
        res.status(404).json( {message : error.message} ) 
    }
}

export const updateBlogData = async(req, res) => {
    try{
        const id = req.params.mainId
        const {title, description, updatedAt} = req.body;
        const updatedData = {title, description, updatedAt, _id : id}
        
        await BlogModel.findByIdAndUpdate(id, updatedData, {new : true})
        res.json(updatedData)

    }catch(error){
        res.status(404).json( {message : error.message} ) 
    }
}