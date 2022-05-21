const express=require("express")

const bookmarkRouter = express.Router();

//Route Level Middleware
const { convertToUpperCase, encryptPassword } = require("../middlewares/middleware")


bookmarkRouter.post("/", convertToUpperCase, encryptPassword, (req, res) => {

    console.log(req.body);
    res.json("Bookmarks")
})

module.exports=bookmarkRouter;