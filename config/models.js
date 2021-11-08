const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  checkedin: {
    type: Number,
    default: 0,
  },
}, 
{ strict: false }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;