const { User } = require("../models/userModel");

const createUser = async (req,res) => {
       
    const { name, lastName, date, dni, age, nationality, email, password } = req.body

    const user =  await User.create({ name, lastName, date, dni, age, nationality, email, password })

    res.status(200).json({ user })
}

const getUsers = async (req,res) =>{

    const allUsers = await User.find({ isDelete:false })

    res.status(200).json({allUsers})
}

const getUserBydni = async (req,res) =>{

    const { dni } = req.params
    
    const userBydni = await User.findOne({dni})

    if (!userBydni) {
       return res.status(404).json({ message : 'No se encontro ningun usuario con ese DNI' })
    }

    res.status(200).json({userBydni})
}

const getUserByemail = async (req,res) =>{

    const { email } = req.params
    
    const userByemail = await User.findOne({email})

    if (!userByemail) {
       return res.status(404).json({ message : 'No se encontro ningun usuario con ese email' })
    }

    res.status(200).json({userByemail})
}

const deleteUser = async (req,res) =>{

    const { id } = req.params
    
    const userDelete = await User.findByIdAndUpdate(id, { isDelete : true })

    if (!userDelete) {
       return res.status(404).json({ message : 'No se encontro el usuario' })
    }

    res.status(200).json({ message : 'Usuario eliminado correctamente' })
}

// Cambia la edad pero no al ID seleccionado
const updateUser = async (req,res) => {
    
    const { id } = req.params

    const userUpdate = await User.findByIdAndUpdate (id, {age: 23})

    if (!userUpdate) {
        return res.status(404).json({ message : 'No se encontro el usuario' })
    }

    res.status(200).json({ message : 'Edad cambiada correctamente' })

}

module.exports = { createUser, getUsers, getUserBydni, getUserByemail, deleteUser, updateUser }