var CronJob = require('cron').CronJob;
var nodeMailer = require('nodemailer');
var Group = require('../models/group').Group;
var User = require('../models/user').User;

exports.index = (req, res) => {
    Group.find(req.query).then(data => {
        res.json(data);
    });
}

exports.show = (req, res) => {
    Group.findById(req.params.id).then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {
    
    var group = new Group;
    group.name = req.body.name;
    group.nextNotificationDate = req.body.mailDate;
    group.managerId = req.body.managerId;   
    
    group.save().then(data => {
        res.json(data);
    });
}

exports.update = (req, res) => {
    
    req.body.nextNotificationDate = req.body.mailDate.hour + ':' + req.body.mailDate.minute; 
    
    Group.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(data => {
        res.json(data);
    });
}

exports.drop = (req, res) => {
    Group.findOneAndRemove({_id: req.params.id}).then(data => {
        res.json(data);
    });
}

exports.findMailHour = (_) => {
    var job = new CronJob({
        cronTime: '0 * * * * 1-5',
        onTick: exports.sendMailToUser,
        start: true,
        timeZone: 'America/Los_Angeles'
    });
    job.start();
}

exports.sendMailToUser = async (_) => {
    let groups = await Group.find();
        
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        
        let now = new Date();
        let hour = +group.nextNotificationDate.split(':')[0];
        let minute = +group.nextNotificationDate.split(':')[1];
        
        if (now.getHours() === hour && now.getMinutes() === minute) {
            let userEmails = []
            let users = await User.find({'groups': group._id.toString()});
            
            users.forEach(user => {
                userEmails.push(user.email);
            });
            
            let transporter = nodeMailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'beetomood@gmail.com',
                    pass: 'Passw0rd$'
                }
            });
            let mailOptions = {
                from: '"Test BeeToMood" <beetomood@gmail.com>',
                to: userEmails,
                subject: "Réclamation de review", 
                text: "Veuillez vous connecter à Bee-To-Mood pour laisser votre review d'aujourd'hui.", 
                html: "<p>Veuillez vous connecter à Bee-To-Mood pour laisser votre review d'aujourd'hui.</p>"
            };
            
            transporter.sendMail(mailOptions, (error, _) => {
                if (error) {
                    return console.log(error);
                }   
            });
        }
    }
}