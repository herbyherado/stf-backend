const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

module.exports = mongoose.model('File', new Schema({
    id_file: Number,
    name: String,
    url: String,
    like: Number
}, { id_file: false })
.plugin(AutoIncrement, { inc_field: 'id_file' }));