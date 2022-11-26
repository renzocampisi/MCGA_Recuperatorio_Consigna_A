const { body, validationResult } = require("express-validator");

const validationCreateUser = [
  
];

const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  const msg = errors.errors.map( ({ msg }) => msg);

  const errorMsg = msg.join('. ')

  if (!errors.isEmpty()) {
    return res.status(403).json( { message: errorMsg } )
  }

  next();
};

module.exports = { checkValidation, validationCreateUser };
