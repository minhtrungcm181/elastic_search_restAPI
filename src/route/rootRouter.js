import express from 'express'
import { run } from '../controller/elastic.js'



const rootRouter = express.Router()
rootRouter.get('/elastic', run)




export default rootRouter