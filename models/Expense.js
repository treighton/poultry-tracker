const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: Date.now
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Expense = mongoose.model("Transaction", expenseSchema);

module.exports = Expense;
