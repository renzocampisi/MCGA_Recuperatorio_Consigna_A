const { createUser } = require('../controllers/userController')
const { checkValidation, validationCreateUser } = require('../middlewares/validationMiddlewares')

const router = require('express').Router()


router.post('/create', validationCreateUser, checkValidation , createUser)


module.exports = { userRouter : router }