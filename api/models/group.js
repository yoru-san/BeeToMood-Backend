const mongoose = require('mongoose');

exports.Group = mongoose.model('Group', { 
    name: { type: String, required: true },
    nextNotificationDate: { type: String }
});