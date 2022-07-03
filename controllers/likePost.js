const Post = require("../models/postModel");
const User = require("../models/registerModel");

const likePost = async (req, res) => {
  try {
    const userId = req.params.id;
    const { postId } = req.body;
    if (!(await User.findById(userId)))
      return res.status(401).json({ message: "access denied." });
    if (await Post.findOne({ likes: userId }))
      return res.status(401).json({ message: "you liked this post before." });
    await Post.findById(postId).updateOne({ $push: { likes: userId } });
    return res.status(201).json({ message: "liked." });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { likePost };
