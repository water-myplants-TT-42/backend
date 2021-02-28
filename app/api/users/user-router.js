const router = require("express").Router()
const bcrypts = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Users = require("./user-model")
const { isValid } = require("./isValid")
const { jwtSecret } = require("../../middleware/secret")

router.post("/register",(req,res) => {
    const newUser = req.body
    if(isValid(newUser)) {
        const rounds = process.env.BCRYPT_ROUNDS
        const hash = bcrypts.hashSync(newUser.password,rounds)
        newUser.password = hash
        Users.add(newUser)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json("username taken")
        })
    }else {
        res.status(400).json("username, password and phoneNumber are required")
    }
})




module.exports = router;
