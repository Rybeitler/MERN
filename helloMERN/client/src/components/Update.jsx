import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useParams, useNavigate} from 'react-router-dom'
import PersonForm from './PersonForm';
import DeleteButton from './DeleteButton';

const Update = (props) => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [person, setPerson] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res=>{
                setPerson(res.data)
                setLoaded(true)
            })
            .catch(err=>console.log(err))
    },[])

    const updatePerson = (personParam) =>{
        axios.put(`http://localhost:8000/api/people/${id}`, personParam)
            .then(res => {
                console.log(res)
                navigate('/')////nav to home when edited
            })
            .catch(err=> console.log(err))
    }
    return (
        <div>
            <h2>Update a person!</h2>
            
                <>
                {
                loaded && <PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName} initialLastName={person.lastName}/>
                }
                <DeleteButton personId={person._id} successCallback={()=>navigate('/')}/>
                </>
            
        </div>
    );
};



//shorthand for loaded?<PersonForm/>:null

export default Update;
