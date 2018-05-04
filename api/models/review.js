const mongoose = require('mongoose');

exports.Review = mongoose.model('Review', { 
    mood: { type: String, required: true },
    comment: { type: String }       
});