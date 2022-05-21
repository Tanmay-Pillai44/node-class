const express = require("express");
const showRouter=express.Router();
const { toLowerCaseString, justADummyMiddleware }=require("../middlewares/showmiddleware");

// Routes Level Middleware
showRouter.use(toLowerCaseString);
showRouter.use(justADummyMiddleware);

showRouter.post("/", (req, res, next) => {

    console.log(req.body);
    // res.json("Show Router root route");
    next();
})


showRouter.post("/a", (req, res, next) => {

    console.log(req.body);
    // res.json("Show Router A route");
    next();
})


module.exports=showRouter;
