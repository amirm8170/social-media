const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, lowercase: true, require: "username is required!" },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required!",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address!",
    ],
  },
  password: { type: String, require: "password is required!" },
  posts: Array,
});

module.exports = mongoose.model("users", userSchema);
