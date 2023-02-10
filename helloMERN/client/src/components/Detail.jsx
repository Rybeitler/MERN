import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'


const Detail = () => {
    const [person, setPerson] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res=>{
                console.log(res.data)
                setPerson(res.data)
            })
            
            .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <p>{person.firstName}</p> 
            <p>{person.lastName}</p> 
        </div>
    );
};




export default Detail;
