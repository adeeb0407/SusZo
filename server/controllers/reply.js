import mongoose from 'mongoose';
import ReplyModel from '../model/replyModel.js'
import UserModel from '../model/userModel.js'

export const fetchReplies = async (req, res) => {
    try {
        const fetchData = await ReplyModel.find() //.limit(how many data you want)
        // const print = fetchData.map((dataItem) => dataItem._id);
        // const print = fetchData.filter((dataItem) => dataItem.title === 'Adseeb');
        res.status(200).json(fetchData)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
}

export const addReplyData = async (req, res) => {

    console.log(req.body)
    const newData = new ReplyModel({
    reply : req.body.reply,
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

export const fetchReplyWithId = async (req, res) => {
    try {
        const dataWithId = await ReplyModel.findById(req.params.mainId)
        res.json(dataWithId)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
}

export const deleteReplyData = async (req, res) => {
    
    try {
        const deleteData =  await ReplyModel.deleteOne({_id: req.params.mainId})
        console.log(`deleted Data`)
        res.json(deleteData)
    } catch (error) {
        res.status(404).json( {message : error.message} ) 
    }
}

export const updateReplyData = async(req, res) => {
    try{
        const id = req.params.mainId
        const {title, description, updatedAt} = req.body;
        const updatedData = {title, description, updatedAt, _id : id}
        
        await ReplyModel.findByIdAndUpdate(id, updatedData, {new : true})
        res.json(updatedData)

    }catch(error){
        res.status(404).json( {message : error.message} ) 
    }
}