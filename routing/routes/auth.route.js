const express = require("express");

const authrouter = express.Router();

authrouter.get("/login", (req, res) => {
    res.send("<h1>Login Page</h1>")
})

authrouter.get("/signup", (req, res) => {
    res.send("<h1>SignUp Page</h1>")
})


module.exports=authrouter;