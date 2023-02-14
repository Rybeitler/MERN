import React, {useState} from 'react';  
import AuthorForm from './AuthorForm';
import axios from 'axios'
import { useNavigate } from 'react-router';

const AddAuthor = () => {
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()

    const addAuthor = (formData)=>{
        axios.post('http://localhost:8000/api/author', formData)
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                console.log(err.response.data.message)
                setErrors(err.response.data.message)
            })
    }
    return (
        <div>
            <h2>Add a New Author</h2>
            <AuthorForm iName='' subProp={addAuthor} errors={errors}/>
        </div>
    );
}

export default AddAuthor;
