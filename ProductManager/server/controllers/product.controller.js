const Product = require('../models/product.model')

const createProduct = (req, res) =>{
    Product.create(req.body)
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
}

const getAllProducts = (req, res) =>{
    Product.find({})
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
} 

const getProduct = (req, res) =>{
    Product.findOne({_id:req.params.id})
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
}
const updateProduct = (req, res) =>{
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updated=>res.json(updated))
        .catch(err=>console.log(err))
}
const deleteProduct = (req, res)=>{
    Product.deleteOne({_id:req.params.id})
        .then(confirm=>res.json(confirm))
        .catch(err=>req.json(err))
}

module.exports ={
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}