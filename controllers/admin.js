var admin = require('../models/employee').Admin;

exports.updatePassword = (req, res) => {

    admin.findOneAndUpdate({_id: req.params.id}, 
        {password: req.body.password}).then(data => {
        res.redirect('/');
    });
}