const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  batches: [
    {
      type: Schema.Types.ObjectId,
      ref: "Batch"
    }
  ],
  expenses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Expense"  
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
