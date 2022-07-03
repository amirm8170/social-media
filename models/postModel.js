const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  image: { type: String },
  title: { type: String, require: true },
  desc: { type: String, require: true },
  author: { type: String },
  likes: { type: Array },
});
module.exports = mongoose.model("posts", postSchema);
