module.exports = app => {
    // var router = require("express").Router();

    app.get("/api" , (req , res) => {
        res.json({message:"This is a Rest api for url-shortner-react-app"})
    });

    app.get("/api/registerUrl" , (req , res) => {
        res.json({message:"Post successfull.."})
    });
};