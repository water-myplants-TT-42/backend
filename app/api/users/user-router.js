const router = require("express").Router()
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Users = require("./user-model")
const { isValid } = require("./isValid")
const { jwtSecret } = require("../../middleware/secret")

router.post("/register",(req,res) => {
    const newUser = req.body
    // console.log(req.body)
    if(isValid(newUser)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8
        const hash = bcryptjs.hashSync(newUser.password,rounds)
        newUser.password = hash
        Users.add(newUser)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json(err.message + " username taken")
        })
    }else {
        res.status(400).json("username, password and phoneNumber are required")
    }
})

router.post("/login", (req, res) => {
    const { username, password } = req.body;
  
    if (isValid(req.body)) {
      Users.findBy({ username: username })
        .then(([user]) => {
          if (user && bcryptjs.compareSync(password, user.password)) {
            const token = makeToken(user)
  
            res.status(200).json({ 
              message: "Welcome " + user.username,
              token            
            });
          } else {
            res.status(401).json({ message: "Invalid credentials" });
          }
        })
        .catch(error => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message: "please provide username and password",
      });
    }
  });
  
  function makeToken(user){
    const payload = {
      subject:user.id,
      username:user.username,
      phoneNumber: user.phoneNumber 
    }
    const options = {
      expiresIn: "400s"
    }
    return jwt.sign(payload,jwtSecret,options)
  }



module.exports = router;
