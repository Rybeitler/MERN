import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

const Authors = (props) => {
    const [authors, setAuthors] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = (id)=>{
        setAuthors(authors.filter(author=>author._id!==id))
    }
    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            <div>
                <Link to={'/author/add'}><button style={{color:'white', background:'teal', margin:'3px'}}>Add an Author</button></Link>
            </div>
            <table style={{border:'2px solid black', width:'300px'}}>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, idx)=>{
                            return(

                            <tr key={idx}>
                                <td>{author.name}</td>
                                <td >
                                    <Link to={`/author/edit/${author._id}`}><button>Edit</button></Link>
                                    <DeleteButton authorId={author._id} callBack={()=>removeFromDom(author._id)}/>
                                </td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Authors;
