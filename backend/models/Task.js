const { Schema, model, Types } = require("mongoose");

const shema = new Schema({
  title: { type: String },
  description: { type: String },
  planed: { type: String },
  isComplete:{type: Boolean},
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Task", shema);
