var CronJob = require('cron').CronJob;
var Group = require('../models/group').Group;
var User = require('../models/user').User;

exports.index = (_, res) => {
    Group.find().then(data => {
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

exports.sendMail = (req, res) => {
    var job = new CronJob({
        cronTime: '0 * * * * 1-5',
        onTick: exports.sendMailToUser,
        start: false,
        timeZone: 'America/Los_Angeles'
    });
    job.start();
}

exports.sendMailToUser = async (_, res) => {
    let groups = await Group.find();

    console.log("Salut");
    
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
     
        let now = new Date();
        let hour = +group.nextNotificationDate.split(':')[0];
        let minute = +group.nextNotificationDate.split(':')[1];
        
        // if (now.getHours() === hour && now.getMinutes() === minute) {
        if (group._id.toString() === "5b2d4d9e88c5b14b002ac9ab") {
            let users = await User.find({'groups': group._id.toString()});
            
            console.log("GOOOOOOOOOO");
            console.log(users);
            // Send mail
        }
    }

    res.json("Ok");
}