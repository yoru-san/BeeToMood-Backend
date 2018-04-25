var Admin = require('../models/admin').Admin;

exports.index = (req, res) => {
    Admin.find().then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {

}

exports.put = (req, res) => {
    
}

exports.delete = (req, res) => {
    
}