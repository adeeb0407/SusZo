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
    bio : {
        type : String,
    },
    following : {
        type : Number,
    },
})

const UserModel = mongoose.model('user', userDataModel)

export default UserModel;