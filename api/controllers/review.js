var Review = require('../models/review').Review;

exports.index = (req, res) => {
    Review.find().then(data => {
        res.json(data);
    });
}

exports.create = (req, res) => {
    var newReview = new User;
    newReview.mood = req.body.mood;
    newReview.coment = req.body.coment; 


    newReview.save().then(data => {
        res.json(data);
    });
}