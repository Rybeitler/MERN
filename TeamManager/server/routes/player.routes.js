const PlayerController = require('../controllers/player.controller')

module.exports = app=>{
    app.get('/api/player', PlayerController.getAllPlayers)
    app.get('/api/player/:id', PlayerController.getOnePlayer)
    app.post('/api/player', PlayerController.createPlayer)
    app.put('/api/player/:id', PlayerController.updatePlayer)
    app.delete('/api/player/:id', PlayerController.deletePlayer)
}