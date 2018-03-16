const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    name: String,
    email: String,
    file: [{ type: Schema.ObjectId, ref: 'File' }]
}));