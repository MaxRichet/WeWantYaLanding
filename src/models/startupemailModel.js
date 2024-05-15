const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let startupemailSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('StartupEmail', startupemailSchema);