const ObjectId = require('mongoose').Schema.Types.ObjectId;
const mongoose = require('mongoose');

exports.User = mongoose.model('User', { 
    name: { type: String, required: true },
    surname: { type: String, required: true },    
    email: { type: String, required: true },
    password: { type: String, required: true },  
    groups: [{ type: ObjectId, ref: 'Group' }],  
    type: { type: String, required: true },
    firstConnection: {type: Boolean, required: true }
});