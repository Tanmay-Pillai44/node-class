const express = require("express");
const port = 9000;
const app=express();
const authRouter=require("./routes/auth.routes");
const bookmarkRouter= require("./routes/bookmark.routes")
const showRouter=require("./routes/show.routes");
const cors=require("cors");
const { loggingMiddleware, commonResponseMiddleware }=require("./middlewares/applevelmiddleware")

//app level Middlewares

app.use(loggingMiddleware);

app.use(cors()); // always apply all the middlewares before the routes otherwise they will show the error.
app.use(express.json());

app.use("/auth", authRouter);

app.use("/bookmark", bookmarkRouter);

app.use("/show", showRouter);

app.use(commonResponseMiddleware);


app.listen(port, () => {
    console.log(`Port is Running ${port}`)
})



