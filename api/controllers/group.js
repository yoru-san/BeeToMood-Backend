var Group = require('../models/group').Group;

exports.index = (req, res) => {
    Group.find().then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {
    var newGroup = new Group;
    newGroup.name = req.body.name;

    newGroup.save().then(data => {
        res.json(data);
    });
}

exports.update = (req, res) => {
    Group.findOneAndUpdate({_id: req.params.id}, {name: req.body.name}).then(data => {
        res.json(data);
    });
}

exports.drop = (req, res) => {
    Group.findOneAndRemove({_id: req.params.id}).then(data => {
        res.json(data);
    });
}