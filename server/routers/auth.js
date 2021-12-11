import express from "express"
import {loginUser, userURL, searchUser, createUser, getUser} from "../controllers/user.js"

const router = express.Router()

router.post('/login', loginUser)
router.get('/login/details', getUser)
router.post('/register', createUser)

//search User
router.get('/search', searchUser)
router.get('/:username', userURL)


export default router