

const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5001;
const authController = require("./controller/authController.js")
const app = express()
const blogController = require("./controller/blogController")
require('dotenv').config();




const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)
app.use("/blog", blogController)



connection.once('open', () => {
  console.log("MongoDB Connected");
})

app.listen(port, () => {
    console.log(`${port} going`)
})