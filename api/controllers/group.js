var Group = require('../models/group').Group;

exports.index = (req, res) => {
    Group.find().then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {

}

exports.put = (req, res) => {
    
}

exports.delete = (req, res) => {
    
}