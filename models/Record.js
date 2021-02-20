const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  feed: {
    type: Number,
    required: "Enter an amount"
  },
  mortality: {
    type: Number,
    required: "Enter an amount"
  },
  temperature: {
    type: Number,
    required: "Enter an amount"
  },
  notes: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
