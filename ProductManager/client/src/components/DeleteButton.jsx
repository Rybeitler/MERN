import React from 'react';
import axios from 'axios'

const DeleteButton = (props) => {
    const {productId, successCallback} = props

    const deleteProduct = (e)=>{
        axios.delete('http://localhost:8000/api/product/'+productId)
            .then(res=>{
                successCallback()
            })
            .catch(err=>console.log(err))
    }
    return (
            <button style={{background:'red', color:'white', border:'2px solid black', borderRadius:'25px'}} onClick={deleteProduct}>Delete</button>
    );
};





export default DeleteButton;
