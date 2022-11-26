const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({

    name : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
    dni : {
        type: String,
        required: true
    },
    age : {
        type: String,
        required: true
    },
    nationality : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    isDelete : {
        type: Boolean,
        default: false
    },

})


const User = mongoose.model("Users", UserSchema)

module.exports = { User }