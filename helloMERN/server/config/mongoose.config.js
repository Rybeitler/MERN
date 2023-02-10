const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/person',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("established a connection to the databse"))
    .catch(err=>console.log("something went wrong connecting to the database", err));