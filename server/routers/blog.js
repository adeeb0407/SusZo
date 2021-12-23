import express from "express"
import {fetchBlogs, addBlog, deleteBlogData, fetchBlogByUser,updateBlogData, fetchBlogWithId} from "../controllers/blog.js"

const router = express.Router()

router.get('/', fetchBlogs)
router.get('/:mainId', fetchBlogWithId)
router.get('/user/:mainId', fetchBlogByUser)
router.post('/', addBlog)
router.delete('/:mainId', deleteBlogData)
router.patch('/:mainId', updateBlogData)

export default router