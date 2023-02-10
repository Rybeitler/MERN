const Person = require('../models/person.model');
const index = (req, res) =>{
    res.json({
        message:"hello world"
    });
}

const createPerson = (req, res)=>{
    Person.create(req.body)
        .then(person=>res.json(person))
        .catch(err=>res.json(err))
}
const getAllPeople = (req, res) =>{
    Person.find({})
        .then(people=>res.json(people))
        .catch(err=>res.json(err))
}
const getPerson = (req, res) =>{
    Person.findOne({_id:req.params.id})
        .then(person => res.json(person))
        .catch(err=>res.json(err))
}
const updatePerson = (req, res) =>{
    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err=>console.log(err))
}
const deletePerson = (req, res) =>{
    Person.deleteOne({_id: req.params.id})
        .then(confirm=>res.json(confirm))
        .catch(err => res.json(err))
}

module.exports = {
    index,
    createPerson,
    getAllPeople,
    getPerson,
    updatePerson,
    deletePerson
}