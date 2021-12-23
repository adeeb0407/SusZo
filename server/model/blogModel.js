import mongoose from 'mongoose';

const blogModel = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    blogBody : {
        type : String,
        required : true,
    },
    userId : { 
        type: String,
        required : true,
     },
     userDetails : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }],
    createdAt : {
        type : Date,
        default : new Date(),
    },
})

const BlogModel = mongoose.model('Blog', blogModel)

export default BlogModel;