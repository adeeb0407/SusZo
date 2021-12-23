import mongoose from 'mongoose';
import UserModel from '../model/userModel.js'
import BlogModel from '../model/BlogModel.js'

export const fetchBlogs = async (req, res) => {
    try {
        const fetchData = await BlogModel.find().populate('userDetails', `username avatar`).sort({createdAt : -1}) //.limit(how many data you want)
        //  const print = fetchData.map((dataItem) => dataItem.userId);
        // const userData = await UserModel.findById(fetchData.find((dataItem) => dataItem.userId)).select('username', 'avatar')
        // const print = fetchData.filter((dataItem) => dataItem.title === 'Adseeb');
         //const finalData = fetchData.push(userData)
        res.status(200).json(fetchData)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
}

export const addBlog = async (req, res) => {

    console.log(req.body)
    const newData = new BlogModel({
    title : req.body.title,
    snippet : req.body.snippet,
    blogBody : req.body.blogBody,
    userId :  req.body.userId,
    });
    try {
    const createdData =  await newData.save();
    const userRefId = await BlogModel.updateOne(
        { _id: createdData._id }, 
        { $push: { userDetails: req.body.userId } }
        );
     console.log(userRefId)
     //const userData = await BlogModel.findById(req.body.userId)
    res.json(userRefId)
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

export const fetchBlogByUser = async (req, res) => {
    try {
        const dataWithId = await BlogModel.find({userId : req.params.mainId})
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