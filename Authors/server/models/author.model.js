const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[3,'Authors names must be at least 3 characters!']
    }
}, {timestamps:true});
module.exports = mongoose.model('Author', AuthorSchema)