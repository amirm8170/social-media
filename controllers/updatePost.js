const Post = require("../models/postModel");

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    if (!(await Post.findById(postId)))
      return res.status(401).json({ message: "access denied!!" });
    if (req.body.title || req.body.desc) {
      await Post.findById(postId).updateOne({ $set: req.body });
      return res.status(201).json({ message: "updated!" });
    } return res.status(401).json({message :"access denied for update it."})
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports = { updatePost };
