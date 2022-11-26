const createUser = (req,res) => {
       
    const { nombre, apellido } = req.body

    console.log(req.body);

    res.status(200).json({ message : 'Todo bien' })
}


module.exports = { createUser }