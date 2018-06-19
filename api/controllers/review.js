var Review = require('../models/review').Review;

exports.index = (req, res) => {
    Review.find(req.query).then(data => {
        console.log(req.query)
        res.json(data);
    });
}

exports.create = (req, res) => {
    var review  = new Review;
    review.groupId = req.body.groupId;
    review.mood = req.body.mood;
    review.comment = req.body.comment;
    review.date = req.body.date;    

    review.save().then(data => {
        res.json(data);
    });
}