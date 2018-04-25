const mongoose = require('mongoose');

exports.Email = mongoose.model('Email', { 
    mood: { type: String, required: true },
    comment: { type: String }       
});