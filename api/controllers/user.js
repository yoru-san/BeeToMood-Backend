var User = require('../models/user').User;
var sha256 = require("sha256");

exports.index = (req, res) => {
    User.find().then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {
    var password = sha256(req.body.password);
    var newUser = new User;
    newUser.name = req.body.name;
    newUser.surname = req.body.surname; 
    newUser.password = password;   
    newUser.email = req.body.email;
    newUser.type = req.body.type;

    newUser.save().then(data => {
        res.json(data);
    });
}

exports.update = (req, res) => {
    console.log(req.body);
    console.log(req.query._id);    
    User.findOneAndUpdate({_id: req.query._id}, {name: req.body.name, surname: req.body.surname, password: req.body.password, email: req.body.email, type: req.body.type}, {new: true}).then(data => {
        res.json(data);        
    });
}

exports.drop = (req, res) => {
    console.log(req.query);
    User.findOneAndRemove({_id: req.query._id}).then(data => {
        res.json(data);
    });
}