const { Schema, model, Types } = require("mongoose");

const shema = new Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  tasks: [{ type: Types.ObjectId, ref: "Task" }],
});
module.exports = model("User", shema);
