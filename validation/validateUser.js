const joi = require("joi");

const validateUser = (data) => {
  const Schema = joi.object({
    fullName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().min(6).required(),
    confirmPass: joi.ref("password"),
  });
  return Schema.validate(data);
};

module.exports = { validateUser };
