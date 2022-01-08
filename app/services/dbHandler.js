const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
    console.log('Connected to mongo server.');
    //trying to get collection names
    // mongoose.connection.db.listCollections().toArray(function (err, names) {
    //     console.log(names); // [{ name: 'dbname.myCollection' }]
    //     module.exports.Collection = names;
    // });

    // User.find({}).then(function (err , users) {
    //     // res.send(users);
    //     console.log(users);
    // });
    // async function getAll() {
    //     const all = await User.find();
    //     console.log(all);
    // }
    //   const all = await Test_collection.find();
    //   console.log(all);
});

var userSchema = new mongoose.Schema({
    main_url: 'string',
    target_url: 'string'
}, { collection: 'test_collection' });

Table = mongoose.model('test_collection', userSchema);

async function registerUrl(url , res) {
    var urlData = await Table.find({main_url:url}).then(function (data) {
        console.log("Getting data!!");
        if (data.length != 0) {
            console.log("Got : ",data);
        } else {
            console.log("NO data found , registering new Url");
        }
        return data
    });
    res.json({message:urlData});
}

async function findAll(url , res) {
    var data = await Table.find().then(function (users) {
        return users;
    });
    res.json({message:data});
}

module.exports = {
    getAll: (req,res) => {
        console.log(req.params , req.query);
        registerUrl(req.query.url , res);
    }
}

