var mongoose = require('mongoose');

var DebitSchema = {
  amount: Number,
  type: String,
  comment: String,
  label: String,
  time: { type: Date, default: Date.now }
};

var Debit = mongoose.model('Debit', DebitSchema);

module.exports = Debit
