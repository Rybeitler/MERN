import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'


const UpdateProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err=>console.log(err))
    },[])

    const updateProduct = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res)
                navigate('/')
        })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h2>Update a Product</h2>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title:</label>
                    <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price: $</label>
                    <input type="number" step='0.01' name='price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" rows='3' name='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};




export default UpdateProduct;
