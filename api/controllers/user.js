var User = require('../models/user').User;

exports.index = (_, res) => {
    User.find().populate('groups').then(data => {
        res.json(data);
    });
}

exports.show = (req, res) => {
    User.findById(req.params.id).then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {
    var newUser = new User;
    newUser.name = req.body.name;
    newUser.surname = req.body.surname; 
    newUser.password = req.body.password;   
    newUser.email = req.body.email;
    newUser.groups = req.body.groups;
    newUser.type = req.body.type;
    newUser.firstConnection = false;

    newUser.save().then(data => {
        res.json(data);
    });
}

exports.update = (req, res) => {   
    User.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, surname: req.body.surname, password: req.body.password, email: req.body.email, groups: req.body.groups, type: req.body.type}, {new: true}).then(data => {
        res.json(data);        
    });
}

exports.updatePassword = (req, res) => { 
    User.findOneAndUpdate({ _id: req.params.id }, { $set: { password: req.body.password } }, {new: true}).then(data => {
        res.json(data);
    });
}

exports.drop = (req, res) => {
    User.findOneAndRemove({_id: req.params.id}).then(data => {
        res.json(data);
    });
}

exports.connect = (req, res) => {  
    User.findOne({email: req.body.email, password: req.body.password}).then(data =>{
        res.json(data);
    })
}

exports.changeStatus = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, { $set: { firstConnection: req.body.firstConnection } }, {new: true}).then(data => {
        res.json(data);
    });
}