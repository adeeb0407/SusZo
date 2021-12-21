import express from "express"
import {loginUser, userURL, updateUserProfile,fetchUserById, fetchUserBlogs,searchUser, createUser, getUser} from "../controllers/user.js"

const router = express.Router()

router.post('/login', loginUser)
router.get('/login/details', getUser)
router.post('/register', createUser)

//search User
router.post('/search', searchUser)
router.get('/:username', userURL)

//update User
router.get('/login/details/:mainId', fetchUserById)
router.patch('/login/details/:id', updateUserProfile);

//User Blogs 
router.get('/blogs/:mainId', fetchUserBlogs)



export default router