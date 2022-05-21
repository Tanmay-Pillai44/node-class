require('dotenv').config() // install dotenv to read .env files It adds the env variables to the process env object
const express=require("express");
const app=express();
const port=process.env.PORT || 9000; // whatever availbale port on heroku run it on it
// console.log(process)
const appRouter=require("./routes/app.route");

app.use("/", appRouter);

app.listen(port, () => {
    console.log("Server running at port !!" + port);
})
