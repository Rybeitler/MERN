const Author = require('../models/author.model')

module.exports = {
    createAuthor:(req,res)=>{
        Author.create(req.body)
            .then(author=>res.json(author))
            .catch(err=>res.status(500).json({message:"Author's Name must be at least 3 characters", error:err}))
    },
    getAllAuthors:(req,res)=>{
        Author.find()
            .then(author=>res.json(author))
            .catch(err=>res.status(500).json({message:"No such Author",error:err}))
    },
    getOneAuthor:(req,res)=>{
        Author.findOne({_id:req.params.id})
            .then(author=>res.json(author))
            .catch(err=>res.status(500).json(err))
    },
    updateAuthor:(req,res)=>{
        Author.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
            .then(updatedAuthor=>res.json(updatedAuthor))
            .catch(err=>res.status(500).json(err))
    },
    deleteAuthor:(req,res)=>{
        Author.deleteOne({_id:req.params.id})
            .then(confirm=>res.json(confirm))
            .catch(err=>res.status(500).json(err))
    }
}

