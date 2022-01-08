const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
    console.log('Connected to mongo server.');
});

var userSchema = new mongoose.Schema({
    main_url: 'string',
    target_url: 'string'
}, { collection: 'test_collection' });

Table = mongoose.model('test_collection', userSchema);

function generateNewSubUrl() {
    var randomSubUrl = ((Math.random() * 10000 + 1) / 10000).toString(36).substring(3); //10-letters random unique url
    return randomSubUrl;
}

async function registerUrltoDB( url, res) {
    var urlData = await Table.find({ main_url: url }).then(function (data) {
        if (data.length != 0) {
            return data
        } else {
            //Register a new url...
            var subUrl = generateNewSubUrl();
            var newData = new Table({ main_url:url , target_url:subUrl });
            newData.save( function (err , newData) {
                if (err) console.log( 'Error ' , err);
            } )
            return newData
        }
    });
    res.json({ message: urlData });
}

// async function findAll(url, res) {
//     var data = await Table.find().then(function (users) {
//         return users;
//     });
//     res.json({ message: data });
// }

async function getTarget( url  , res) {
    url = url.split("/")
    url = url[url.length - 1]
    var output = await Table.find({ target_url: url }).then(function (data) {
        if (data.length != 0) {
            return data
        } else {
            return 'invalid'
        }
    });
    res.json({message: output});
}

module.exports = {
    registerUrl: (req, res) => {
        registerUrltoDB(req.query.url, res);
    },
    findTargetUrl: (req , res ) => {
        getTarget( req.query.target_url , res );
    }
}

