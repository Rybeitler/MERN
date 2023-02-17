const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Please provide a player name."],
        minLength:[2, "Players names need to be at least 2 characters"]
    },
    prefPos:{
        type:String,
        default:'undecided'
    },
    status:{
        one:{
            type:String,
            enum: ["Undecided", "Playing", "Not Playing"],
            default: "Undecided"
        },
        two:{
            type:String,
            enum: ["Undecided", "Playing", "Not Playing"],
            default: "Undecided"
        },
        three:{
            type:String,
            enum: ["Undecided", "Playing", "Not Playing"],
            default: "Undecided"
        }
    }
},{timestamps:true})

module.exports = mongoose.model('Player', PlayerSchema)