const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3, "Name must contain at least 3 characters!"]
    },
    email:{
        type:String,
        required:true,
        validate : [validator.isEmail, "Please Provide Valid Mail"]
    },
    subject:{
        type:String,
        required:true,
        minLength:[5, "Subject must contain at least 5 characters"]
    },
    message:{
        type:String,
        required:true,
        minLength:[10, "Message must contain at least 10 characters"]
    }
})


module.exports = mongoose.model('userSchema', userSchema)