const express = require("express");

const myrouter = express.Router();

myrouter.get("/", (req, res) => {
    res.send("Hello")
})


module.exports=myrouter;