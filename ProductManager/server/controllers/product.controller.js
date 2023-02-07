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

module.exports ={
    createProduct,
    getAllProducts,
    getProduct
}