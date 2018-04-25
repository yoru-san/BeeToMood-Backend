var addEmploye = require('../models/employee').employee;




exports.index = (req, res) => {
    employee.find().then(data => {
        res.render("listEmployee",{allTask: data})
    })
}

exports.action = (req, res) => {
    var employee = new addEmployee;
    employee.name = req.body.name;
    employee.password = req.body.password;

    employee.save().then(data => {
        res.redirect("/");
    });
}

exports.update = (req, res) => {

    employee.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, password: req.body.password}).then(data => {
        res.redirect('/');
    });
    // Recipe.update({_id: req.params.id, $set: {title: req.body.title, details: req.body.details}}).then(data => {
    //     res.redirect('/');
    // });
}

exports.remove = (req,res) => {
    employee.findOneAndRemove({_id: req.params.id}).then(data => {
        res.redirect("/");
    });
}