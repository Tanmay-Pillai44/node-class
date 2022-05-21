const toLowerCaseString = (req, res, next) => {

    console.log("Show Middleware got called -------")

    const str = req.body.name;

    req.body.name=str.toLowerCase();

    next();
}

const justADummyMiddleware = (req, res, next) => {

    console.log("Dummy Middleware got called -------")

    const str = req.body.name;

    req.body.name=str.toLowerCase();

    next();
}

module.exports = {
    toLowerCaseString,
    justADummyMiddleware
}