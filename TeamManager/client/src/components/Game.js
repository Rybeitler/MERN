import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Game = (props) => {
    const {activeGame} =props;

    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    },[])

    const changeStatus = (player, changedStatus)=>{
        player.status[activeGame] =changedStatus
        axios.put(`http://localhost:8000/api/player/${player._id}`, player)
            .then(res=>{
                setPlayers([...players])
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className='container'>
                <table className="table table-striped table-info">
                <thead>
                    <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player)=>(
                            <tr key={player._id}>
                                <td>{player.name}</td>
                                <td>
                                    <button className={`${player.status[activeGame]==='Playing'?'btn btn-success m-2':'btn btn-light m-2'}`} onClick={()=>changeStatus(player, 'Playing')}>Playing</button>
                                    <button className={`${player.status[activeGame]==='Not Playing'?'btn btn-danger m-2':'btn btn-light m-2'}`} onClick={()=>changeStatus(player, 'Not Playing')}>Not Playing</button>
                                    <button className={`${player.status[activeGame]==='Undecided'?'btn btn-warning m-2':'btn btn-light m-2'}`} onClick={()=>changeStatus(player, 'Undecided')}>Undecided</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Game;
