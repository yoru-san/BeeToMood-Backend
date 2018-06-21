var Review = require('../models/review').Review;

exports.index = (req, res) => {
    Review.find(req.query).then(data => {
        console.log(data.group)
        res.json(data);
    });
}

exports.create = (req, res) => {
    console.log(req.body)
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