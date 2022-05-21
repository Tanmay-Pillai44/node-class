const express = require("express");
const myrouter =require("./routes/app.route")
const authrouter = require("./routes/auth.route")

// module object -->  global object

const app = express();

// /auth/login
// /auth/signup

app.use(myrouter);
app.use("/auth", authrouter);``

// app.get("/", (req, res) => {
//     res.send("Hello")
// })

app.listen(8000, () => {
    console.log("Server is Running")
})
