import React, {useState, useEffect} from 'react';
import axios from 'axios'


const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product',{
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>console.log(err));
        setTitle('')
        setPrice(0)
        setDescription('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
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



export default ProductForm;
