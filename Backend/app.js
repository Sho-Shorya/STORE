const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const PORT = 3000;
app.get('/',(req,res) =>{
  res.send("we are connected")
})
module.exports = app;