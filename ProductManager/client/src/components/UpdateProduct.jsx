import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

const UpdateProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err=>console.log(err))
    },[])

    const updateProduct = (formData) =>{
        axios.put("http://localhost:8000/api/product/"+id, formData)
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h2>Update a Product</h2>
            {
                loaded && <ProductForm onSubProp={updateProduct} initTitle={product.title} initPrice={product.price} initDesc={product.description}/>
            }
            <DeleteButton productId={product._id} successCallback={()=>navigate('/')}/>
        </div>
    );
};




export default UpdateProduct;
