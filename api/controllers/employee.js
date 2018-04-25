var Employee = require('../models/employee').Employee;

exports.index = (req, res) => {
    Employee.find().then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {

}

exports.put = (req, res) => {
    
}

exports.delete = (req, res) => {
    
}