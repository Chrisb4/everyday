var express = require('express'),
  router = express.Router(),
  _ = require('lodash'),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  Mood = mongoose.model('Mood'),
  Debit = mongoose.model('Debit');


module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Mood.find(function (err, moods) {
    if (err) return next(err);
    console.log(moods[0]);
    res.body = moods;
    console.log(res);
    res.render('index', {
      title: 'Everyday Improve'
    });
  });
});

// router.get('/', function(req, res, next){
//   var moods = Mood.find({});
//   moods.then(function(moods){
//
//     console.log("Looking for 1 mood:");
//     console.log(res.body);
//     res.render('index', {
//       title: 'Everyday Improve',
//       moods: moods
//     });
//   });
// });

router.get('/moods', function(req, res, next){
  var getMoods = Mood.find({});
  getMoods.then(function(moods){
    res.json(moods);
  });
});

router.get('/debits', function(req, res, next){
  var getDebits = Debit.find({});
  getDebits.then(function(debits){
    res.json(debits);
  });
});

router.post('/debits', function(req, res, next) {
  var debit = new Debit({
    amount: req.body.amount,
    type: req.body.type,
    comment: req.body.comment,
    label: req.body.label
  });
  debit.save(debit, function(error) {
    if (error) {
      res.send(error);
    } else {
      res.json(debit);
    }
  })
});

router.get('/shopping_list', function(req, res, next) {
  var cartItemsRequest = CartItem.find({userId: req.user._id});
  console.log(req.body.username);
  cartItemsRequest.then(function(cartItems) {
    res.render('shopping_list', { title: 'Shopping List | Zombie Kit', cartItems: cartItems, view: 'shopping_list', currentUser: currentUser});
  });
});



router.post('/moods', function(req, res, next) {
  console.log(req);
  var mood = new Mood({
    mood: req.body.mood,
    meditate: req.body.meditate,
    exercise: req.body.exercise,
    energy: req.body.energy,
    comments: req.body.comments
  });
  mood.save(mood, function(error) {
    if (error) {
      res.send(error);
    } else {
      res.json(mood);
    }
  });
});
