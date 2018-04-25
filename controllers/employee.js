var employee = require('../models/employee').Employee;

exports.index = (req, res) => {
    employee.find().then(data => {
        res.render("listEmployee",{allTask: data})
    })
}

<<<<<<< HEAD
exports.add = (req, res) => {
    var employee = new addEmployee;

=======
exports.action = (req, res) => {
    var employee = new employee;
>>>>>>> 81234c719ce46f9c80bd513460a3a9a5bb9a8a95
    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.password = req.body.password;

    employee.save().then(data => {
        res.redirect("/");
    });
}

exports.update = (req, res) => {

    employee.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, password: req.body.password}).then(data => {
        res.redirect('/');
    });
}

exports.remove = (req,res) => {
    employee.findOneAndRemove({_id: req.params.id}).then(data => {
        res.redirect("/");
    });
}