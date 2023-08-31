import dotenv from 'dotenv'
dotenv.config() // function call config ()

import express from 'express'
import cors from 'cors';

import connectDB from './config/connectdb.js'

import userRoutes from './routes/userroutes.js'




const app = express()

const PORT = process.env.PORT

const DATABASE_URL = process.env.DATABASE_URL

// cors policy 

app.use (cors())

// DATABASE CONNECTION 

connectDB(DATABASE_URL)

//JSON 

app.use(express.json())

// Load  Routes

app.use("/api/user",userRoutes  )

 app.listen(PORT,()=>{

    console.log(`Server listening at http://localhost:${PORT}`)
 })
 

