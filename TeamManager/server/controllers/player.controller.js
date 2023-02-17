const Player = require('../models/player.model')

module.exports= {
    getAllPlayers: async(req, res)=>{
        try{
            const allPlayers = await Player.find()
            res.json(allPlayers)
        }
        catch(err){
            res.status(500).json({message:'something went wrong'})
        }
    },
    getOnePlayer: async(req, res)=>{
        try{
            const player = await Player.findOne({_id:req.params.id})
            res.json(player)
        }
        catch(err){
            res.status(500).json({message:'something went wrong'})
        }
    },
    createPlayer: async(req, res)=>{
        try{
            const newPlayer = await Player.create(req.body)
            res.json(newPlayer)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    updatePlayer: async(req, res)=>{
        try{
            const updatedPlayer = await Player.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
            res.json(updatedPlayer)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    deletePlayer: async(req, res)=>{
        try{
            const deleteMe = await Player.deleteOne({_id:req.params.id})
            res.json(deleteMe)
        }
        catch(err){
            res.status(500).json({message:'something went wrong'})
        }
    }
}