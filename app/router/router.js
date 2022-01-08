const dbService = require('../services/dbHandler')

module.exports = app => {
    

    app.get("/api" , (req , res) => {
        res.json({message:"This is a Rest api for url-shortner-react-app"})
    });

    app.get("/api/registerUrl" , dbService.getAll);
};