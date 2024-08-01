import express from 'express'
import path from 'path'
import { config } from 'dotenv'

config()
const app = express();
const port = process.env.PORT || 4000;
app.use(express.static('./static'))
app.get('/', (req, res)=>{
    res.status(200).sendFile(path.resolve('./static/index.html'))
})
app.get('/', (req, res)=>{
    res.status(200).sendFile(path.resolve('./static/about.html'))
})
app.listen(port,()=>{
    console.log(`Port running is ${port}`)
})