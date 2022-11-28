const { body, validationResult } = require("express-validator");

const validationCreateUser = [
  body("name")
    .notEmpty()
    .withMessage("Nombre no puede estar vacio")
    .isLength({ min: 5 })
    .withMessage("Nombre con menos de 5 letras"),

  body("lastName")
    .notEmpty()
    .withMessage("Apellido no puede estar vacio")
    .isLength({ min: 5 })
    .withMessage("Apellido con menos de 5 letras"),

  body("date")
    .isDate()
    .withMessage("Fecha: formato invalido EJ(MM-DD-YY)")
    .notEmpty()
    .withMessage("Fecha de nacimiento no puede estar vacia "),

  body("dni")
    .notEmpty()
    .withMessage("DNI no puede estar vacio")
    .isLength({ min: 8 })
    .withMessage("DNI no puede contener menos de 8 numeros")
    .isNumeric()
    .withMessage("DNI no puede contener letras"),

  body("age")
    .notEmpty()
    .withMessage("Edad no puede estar vacio"),

  body("nationality")
    .notEmpty()
    .withMessage("Nacionalidad no puede estar vacio"),

  body("email")
    .isEmail()
    .withMessage("Email invalido")
    .notEmpty()
    .withMessage("Email no puede estar vacio"),
    
  body("password")
    .notEmpty()
    .withMessage("Contrasena no puede estar vacio")
    .isLength({ min: 5 })
    .withMessage("Contrasena con menos de 5 caracteres"),
];

const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  const msg = errors.errors.map(({ msg }) => msg);

  const errorMsg = msg.join(". ");

  if (!errors.isEmpty()) {
    return res.status(403).json({ message: errorMsg });
  }

  next();
};

module.exports = { checkValidation, validationCreateUser };
