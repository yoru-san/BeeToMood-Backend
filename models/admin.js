const mongoose = require('mongoose');

exports.Admin = mongoose.model('Admin', { 
    user: { type: String, required: true },
    password: { type: String, required: true }       
});