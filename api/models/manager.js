const mongoose = require('mongoose');

exports.Manager = mongoose.model('Manager', { 
    user: { type: String, required: true },
    password: { type: String, required: true }       
});