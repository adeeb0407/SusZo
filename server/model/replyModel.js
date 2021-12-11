import mongoose from 'mongoose';

const replyModel = mongoose.Schema({
    reply : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : new Date(),
    },
})

const ReplyModel = mongoose.model('reply', replyModel)

export default ReplyModel;