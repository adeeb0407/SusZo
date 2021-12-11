import express from "express"
import {fetch, addData, deleteData, updateData} from "../controllers/reply.js"

const router = express.Router()

router.get('/', fetch)
router.post('/', addData)
router.delete('/:mainId', deleteData)
router.patch('/:mainId', updateData)

export default router