const express=require("express")

const authRouter = express.Router();

// the array would contain all the registered users
const userArray = [

]


authRouter.post("/signup", (req, res) => {

    // console.log(req.body);

    userArray.push(req.body);

    res.json({
        message: "Success",
    })
})

authRouter.get("/users", (req, res) => {

    res.json({
        message: "Success",
        users: userArray
    })
})

module.exports=authRouter;