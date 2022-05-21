const express=require("express");
const appRouter=express.Router();
const { rootController } =require("../controllers/app.controller");


appRouter.get("/",rootController)


module.exports=appRouter;