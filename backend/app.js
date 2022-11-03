//modules importations
require('dotenv').config()
const express = require('express')
const connectdb = require('../backend/config/connectdb')
const routes = require ('../backend/routes/routes')
const app = express()
const port = 4500

//Using json format in the req and res
app.use(express.json())
app.use("/api", routes);

//Call Database connection
connectdb();
//// server listen
app.listen(port,err=>{
err?console.log(err):console.log(`server is running on http://localhost:${port}`);;


})