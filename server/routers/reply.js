import express from "express"
import {fetchReplies, addReplyData, deleteReplyData, updateReplyData} from "../controllers/reply.js"

const router = express.Router()

router.get('/', fetchReplies)
router.post('/', addReplyData)
router.delete('/:mainId', deleteReplyData)
router.patch('/:mainId', updateReplyData)

export default router