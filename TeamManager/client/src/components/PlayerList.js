import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DeleteButton from './DeleteButton';


const PlayerList = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    },[])

    const removeFromDom = (id)=>{
        setPlayers(players.filter(player=>player._id!==id))
    }
    return (
        <div>
            <table className="table table-striped table-success">
                <thead>
                    <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player)=>(
                            <tr key={player._id}>
                                <td>{player.name}</td>
                                <td>{player.prefPos}</td>
                                <td><DeleteButton player={player} callBack={()=>removeFromDom(player._id)}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PlayerList;
