const Post = require("../models/postModel");
const User = require("../models/registerModel");

const newPost = async (req, res) => {
  try {
    if (!(await User.findOne({ _id: req.params.id })))
      return res.status(401).json({ message: "access denied!!" });
    const { title, desc } = req.body;
    const newPost = new Post({
      title,
      desc,
      author: req.params.id,
    });
    await newPost.save();
    await User.findOne({ _id: req.params.id }).updateOne({
      $push: { posts: newPost.id },
    });
    return res.status(201).json({ message: "new post added." });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports = { newPost };
