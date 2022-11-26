const { User } = require("../models/userModel");

const createUser = async (req,res) => {
       
    const { name, lastName, date, dni, age, nationality, email, password } = req.body

   await User.create({ name, lastName, date, dni, age, nationality, email, password })

    console.log(req.body);

    res.status(200).json({ message : 'Todo bien' })
}


module.exports = { createUser }