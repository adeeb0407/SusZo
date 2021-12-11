import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouters from "./routers/auth.js"
import replyRouters from "./routers/reply.js"


const app = express()
dotenv.config()

app.use(express.json({limit : "30mb", extended : true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/user', authRouters)
app.use('/reply', replyRouters)

app.get('/', (req, res) => {
    res.send('SusZo backend Server')
})

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(process.env.PORT || 5000, ()=> console.log(`listening on port ${process.env.PORT || 5000}`)))
.catch(err => console.error(err))