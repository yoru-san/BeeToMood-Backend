const mongoose = require('mongoose');

exports.Review = mongoose.model('Review', { 
    userId: {type: String, required: true },
    group: {type: String, required: true },
    mood: { type: String, required: true },
    comment: { type: String }, 
    date: { type: String }      
});