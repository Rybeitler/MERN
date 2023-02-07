const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/product',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=>console.log('established db connection'))
    .catch(err=>console.log('unable to establish db connection', err));