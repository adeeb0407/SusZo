import mongoose from 'mongoose';

const userDataModel = mongoose.Schema({
    fullname : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    username : {
        type : String,
        require : true,
        unique : true,
    },
    password : {
        type : String,
        require : true,
    },
    headline : {
        type : String,
    },
    bio : {
        type : String,
    },
    followers : {
        type : Number,
    },
    createdAt : {
        type : Date,
        default : new Date(),
    },
})

const UserModel = mongoose.model('user', userDataModel)

export default UserModel;