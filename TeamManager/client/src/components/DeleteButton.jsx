import React from 'react';
import axios from 'axios'
const DeleteButton = (props) => {
    const { player, callBack } = props

    const deletePlayer = (e) => {
        axios.delete('http://localhost:8000/api/player/' + player._id)
            .then(res => {
                callBack()
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button className="btn btn-danger m-2" data-bs-toggle='modal' onClick={deletePlayer}>Delete</button>

            
        </div>
    );
};





export default DeleteButton;