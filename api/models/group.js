const mongoose = require('mongoose');
const ObjectId = require('mongoose').Schema.Types.ObjectId;

exports.Group = mongoose.model('Group', { 
    name: { type: String, required: true },
    managerId: { type: ObjectId, ref: 'User', required: true },
    nextNotificationDate: { type: String }
});