import React from 'react';
import axios from 'axios'

const DeleteButton = (props) => {
    const {authorId, callBack} = props

    const deleteAuthor = (e)=>{
        axios.delete('http://localhost:8000/api/author/'+authorId)
            .then(res=>{
                callBack()
            })
            .catch(err=>console.log(err))
    }
    return (
            <button style={{background:'red', color:'white', border:'2px solid black', borderRadius:'25px'}} onClick={deleteAuthor}>Delete</button>
    );
};





export default DeleteButton;