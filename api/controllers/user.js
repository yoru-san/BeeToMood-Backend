var User = require('../models/user').User;

exports.index = (req, res) => {
    User.find().then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {
    var newUser = new User;
    newUser.name = req.body.name;
    newUser.surname = req.body.surname; 
    newUser.password = req.body.password;   
    newUser.email = req.body.email;
    newUser.type = req.body.type;

    newUser.save().then(data => {
        res.json(data);
    });
}

exports.update = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, surname: req.body.surname, password: req.body.password, email: req.body.email, type: req.body.type}).then(data => {
        res.json(data);        
    });
}

exports.drop = (req, res) => {
    User.findOneAndRemove({_id: req.params.id}).then(data => {
        res.json(data);
    });
}