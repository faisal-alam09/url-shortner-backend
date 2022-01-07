// Using Node.js `require()`
const mongoose = require('mongoose');

// // Using ES6 imports
// import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });
var db = mongoose.connection;

// User model
// const User = mongoose.model('test_collection', {
//     main_url: String ,
//     target_url: String 
// });

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

Table.find().then(function (users) {
    console.log("Getting data!!")
    console.log(users);
});

// exports.test = function (req, res) {
//     res.render('test');
// };
