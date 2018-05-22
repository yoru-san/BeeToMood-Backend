var Group = require('../models/group').Group;

exports.index = (req, res) => {
    Group.find().then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {
    var group = new Group;
    group.name = req.body.name;
    group.nextNotificationDate = req.body.mailDate;    

    group.save().then(data => {
        res.json(data);
    });
}

exports.update = (req, res) => {
    Group.findOneAndUpdate({_id: req.query._id}, { name: req.body.name, nextNotificationDate: req.body.mailDate }, {new: true}).then(data => {
        res.json(data);
    });
}

exports.drop = (req, res) => {
    Group.findOneAndRemove({_id: req.query._id}).then(data => {
        res.json(data);
    });
}