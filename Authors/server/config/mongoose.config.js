const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/author',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("established a database connection"))
    .catch(err=>console.log('Something went wrong connecting to the database', err))