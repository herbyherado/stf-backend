const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('File', new Schema({
    name: String,
    url: String,
    like: Number
}));