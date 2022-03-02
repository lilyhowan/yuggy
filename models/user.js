const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name text field is required"]
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
