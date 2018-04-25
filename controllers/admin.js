
var addEmploye = require('../models/employee').employee;




exports.index = (req, res) => {
    res.render('addEmploye');
}

exports.action = (req, res) => {
    var employee = new addEmployee;
    employee.name = req.body.name;
    employee.password = req.body.password;

    employee.save().then(data => {
        res.redirect("/");
    });
}

