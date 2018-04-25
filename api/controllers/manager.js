var Manager = require('../models/manager').Manager;

exports.index = (req, res) => {
    Manager.find().then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {

}

exports.put = (req, res) => {
    
}

exports.delete = (req, res) => {
    
}