const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentemailSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('User', studentemailSchema);