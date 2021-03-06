var Review = require('../models/review').Review;

exports.index = (req, res) => {
    Review.find({userId: req.params.id}).then(data => {
        res.json(data);
    });
}

exports.show = (req, res) => {
    Review.find(req.query).then(data => {
        res.json(data);
    })
}

exports.create = (req, res) => {
    var review  = new Review;
    review.userId = req.body.userId;
    review.group = req.body.group;
    review.mood = req.body.mood;
    review.comment = req.body.comment;
    review.date = req.body.date;    

    review.save().then(data => {
        res.json(data);
    });
}