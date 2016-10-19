var mongoose = require('mongoose');

var MoodSchema = {
  mood: Number,
  meditate: String,
  exercise: String,
  energy: String,
  time: { type: Date, default: Date.now }
};

var Mood = mongoose.model('Mood', MoodSchema);

module.exports = Mood
