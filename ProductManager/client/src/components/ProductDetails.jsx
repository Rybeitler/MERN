import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>setProduct(res.data))
            .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductDetails;
