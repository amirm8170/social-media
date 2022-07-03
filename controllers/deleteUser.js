const User = require("../models/registerModel");

const deleteUser = async (req, res) => {
  try {
    if (req.body.userId === req.params.id) {
      await User.findById(req.body.userId).deleteOne();
      return res.status(200).json({ message: "deleted!" });
    }
    return res.status(401).json({ message: "not accessible for you!" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports = { deleteUser };
