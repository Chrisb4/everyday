var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');
  Mood = mongoose.model('Mood')

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.post('/mood', function(req, res, next) {
  console.log(req);
  var mood = new Mood({
    mood: req.body.mood,
    meditate: req.body.meditate,
    exercise: req.body.exercise,
    energy: req.body.energy
  });
  mood.save(mood, function(error) {
    if (error) {
      res.send(error);
    } else {
      res.json(mood);
    }
  });
});
