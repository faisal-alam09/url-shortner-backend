const dbService = require('../services/dbHandler')

module.exports = app => {


    app.get("/api", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // next();
        res.json({ message: "This is a Rest api for url-shortner-react-app" })
    });

    app.get("/api/registerUrl", dbService.registerUrl);
    app.get("/api/findTargetUrl", dbService.findTargetUrl); //returns ('invalid' {keyword} or the target_url)
};