const { hashPassword } = require("../bcryptHelper");
const User = require("../models/registerModel");

const updateUser = async (req, res) => {
  try {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        req.body.password = hashPassword(req.body.password);
      }
      await User.findByIdAndUpdate(req.body.userId , {$set : req.body});
      return res.status(200).json("updated!")
    }

    return res.status(401).json({ message: "not accessible for you!" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports = { updateUser };
