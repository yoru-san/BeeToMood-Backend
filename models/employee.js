const mongoose = require('mongoose');

exports.Employee = mongoose.model('Employee', { 
    user: { type: String, required: true },
    password: { type: String, required: true }       
});