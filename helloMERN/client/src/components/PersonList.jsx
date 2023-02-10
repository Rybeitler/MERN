import React, { useEffect, useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const PersonList = (props) => {
    const {personList} = props;
    const [people, setPeople] = useState([personList])


    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
            .then((res)=>{
                setPeople(res.data)
            })
            .catch((err)=>console.log(err))
    },[personList])///refresh list when new entry is added
    const removeFromDom = personId =>{
        setPeople(people.filter(person=>person._id !==personId))
    }
    return (
        <div>
            {
                people.map((person, index)=>{
                    return( 
                    <div key={index}>
                        <Link to={`/people/${person._id}`}>{person.firstName}'s page</Link>|
                        <Link to={`/people/edit/${person._id}`}>Edit {person.firstName}</Link>|
                        <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                    </div>
                    
                    )
                })
            }
        </div>
    );
};




export default PersonList;
