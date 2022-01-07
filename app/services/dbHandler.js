// Using Node.js `require()`
const mongoose = require('mongoose');

// // Using ES6 imports
// import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;

// User model
const User = mongoose.model('test', {
    main_url: { type: String },
    target_url: { type: String }
});

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  console.log("h");
});

exports.test = function(req,res) {
  res.render('test');
};
