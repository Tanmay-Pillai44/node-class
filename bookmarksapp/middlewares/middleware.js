const convertToUpperCase=(req, res, next) => {

    const str=req.body.name;

    console.log("Data------", str); // data from post request by bookmark.routes.js received

    req.body.name = str.toUpperCase();
    req.body.addtional="Added by middleware"

    res.send("Response sent by Middleware") // response sent back and request is closed but u want to pass it to callback in  bookmark.routes we use next()

    next();
}


const encryptPassword = (req, res, next) => {

    const str = req.body.password;

    console.log("Middleware-----Hit", str);
    const encodeString=btoa(str);

    console.log(encodeString);

    req.body.password=encodedString;

    next(); // when you call next method it passes control to next middleware in line.
}

module.exports={
    convertToUpperCase,
    encryptPassword
}

// Middleware
// Middleware is software that's assembled into an application pipeline to handle requests and responses. Each component:


// Chooses whether to pass the request to the next component in the pipeline.

// Can perform work before and after the next component in the pipeline is invoked.