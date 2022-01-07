module.exports = app => {
    // var router = require("express").Router();

    app.get("/post" , (req , res) => {
        res.json({message:"Post successfull.."})
    });
};