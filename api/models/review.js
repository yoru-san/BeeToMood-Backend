const mongoose = require('mongoose');

exports.Review = mongoose.model('Review', { 
    groupId: {type: String, required: true },
    mood: { type: String, required: true },
    comment: { type: String }, 
    date: { type: Date }      
});