var mongoose = require('mongoose');

var MoneySchema = {
  spend: Number,
  time: { type: Date, default: Date.now }
};

var Money = mongoose.model('Money', MoneySchema);

module.exports = Money
