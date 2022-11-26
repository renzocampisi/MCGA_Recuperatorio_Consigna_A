const { createUser, getUsers, getUserBydni, getUserByemail, deleteUser, updateUser } = require('../controllers/userController')
const { checkValidation, validationCreateUser } = require('../middlewares/validationMiddlewares')

const router = require('express').Router()


router.post('/create', validationCreateUser, checkValidation , createUser)
router.get('/getusers', getUsers)
router.get('/getuserdni/:dni', getUserBydni)
router.get('/getuseremail/:email', getUserByemail)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)


module.exports = { userRouter : router }