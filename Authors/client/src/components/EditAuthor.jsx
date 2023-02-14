import React, {useState, useEffect}from 'react';  
import AuthorForm from './AuthorForm';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router';

const AddAuthor = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res=>{
            setAuthor(res.data)
            setLoaded(true)
        })
        .catch(err=>console.log(err))
    })
    const editAuthor = (formData)=>{
        axios.put(`http://localhost:8000/api/author/${id}`, formData)
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
            <h2>Edit an Author</h2>
            {
                loaded && <AuthorForm iName={author.name} subProp={editAuthor} errors={errors}/>
            }
        </div>
    );
}

export default AddAuthor;
