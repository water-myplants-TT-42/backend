const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const userRouter = require("../api/users/user-router")
const plantsRouter = require("../api/plants/plants-router")
const server = express()



server.use(express.json())
server.use(helmet())
server.use(cors())
server.use("/api/users",userRouter);
server.use("/api/plants",plantsRouter)

server.get("/",(req,res) => {
    res.json("server up and running")
})

module.exports = server;
