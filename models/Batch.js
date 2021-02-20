const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BatchSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: Date.now
  },
  count: {
    type: Number,
    required: "Enter an amount"
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    default: "Broiler"
  },
  processingDate: {
    type: Date
  },
  avgWeight: {
    type: Number,
  },
  records: [
    {
      type: Schema.Types.ObjectId,
      ref: "Record"
    }
  ],
  expenses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Expense"  
    }
  ]
});

const Batch = mongoose.model("Batch", BatchSchema);

module.exports = Batch;
