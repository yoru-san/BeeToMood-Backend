var Group = require('../models/group').Group;

exports.index = (req, res) => {
    Group.find().then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {

    var group = new Group;
    group.name = req.body.name;
    group.nextNotificationDate = req.body.mailDate;    

    group.save().then(data => {
        res.json(data);
    });
}

exports.update = (req, res) => {
    Group.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(data => {
        res.json(data);
    });
}

exports.drop = (req, res) => {
    Group.findOneAndRemove({_id: req.params.id}).then(data => {
        res.json(data);
    });
}

exports.sendMail = (req, res) => {
    var message = {
        from: 'beetomood@gmail.com',
        to: 'receiver@sender.com',
        subject: 'Votre mood de la journée',
        text: 'Bonjour, Veuillez vous connecter à Bee-To-Mood pour renseigner votre mood de la journée.',
        //date:,
    };
}