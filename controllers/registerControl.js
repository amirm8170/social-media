const { hashPassword } = require("../bcryptHelper");
const User = require("../models/registerModel");
const { validateUser } = require("../validation/validateUser");

const register = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) return res.status(401).json(error.details[0].message);
    const { fullName, email, password, confirmPass } = req.body;

    if (password === confirmPass) {
      const hash = hashPassword(req.body.password);
      const newUser = new User({
        fullName,
        email,
        password: hash,
      });
      await newUser.save();
      return res.status(201).json(newUser);
    }
    res.status(401).json({ message: "password confirmation is invalid." });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { register };
