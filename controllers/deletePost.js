const Post = require("../models/postModel");
const User = require("../models/registerModel");

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id
    if (!(await Post.findOne({ _id: postId})))
      return res.status(401).json({ message: "access denied!!" });
    await Post.findByIdAndDelete(postId);
    await User.findOne({posts :postId }).updateOne({$pull : {posts : postId}})
    return res.status(200).json({ message: "deleted!" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports = { deletePost };
