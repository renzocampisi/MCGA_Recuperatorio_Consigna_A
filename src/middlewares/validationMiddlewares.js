const { body, validationResult } = require("express-validator");

const validationCreateUser = [
  body("nombre")
    .notEmpty()
    .withMessage("Nombre no puede estar vacio")
    .isLength({ min: 5 })
    .withMessage("Nombre con menos de 5 letras"),
  body("apellido")
    .notEmpty()
    .withMessage("Apellido no puede estar vacio")
    .isLength({ min: 5 })
    .withMessage("Apellido con menos de 5 letras"),
  body("fecha")
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
  body("edad")
    .notEmpty()
    .withMessage("Edad no puede estar vacio")
    .isLength({ min: 10 })
    .withMessage("Edad no puede ser menor a 10")
    .isLength({ max: 100 })
    .withMessage("Edad no puede ser mayor a 100")
    .isNumeric()
    .withMessage("Edad no puede contener letras"),
  body("nacionalidad")
    .notEmpty()
    .withMessage("Nacionalidad no puede estar vacio")
    .withMessage("Nacionalidad con menos de 5 letras"),
  body("email")
    .isEmail()
    .withMessage("Email invalido")
    .notEmpty()
    .withMessage("Email no puede estar vacio"),
  body("contrasena")
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
