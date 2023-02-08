import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    const {products, setProducts, removeFromDom} = props;

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                removeFromDom(id)
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>setProducts(res.data))
            .catch(err=>console.log(err))
    },[])
    return (
        <div>
            {
                products.map((product, index)=>{
                    return(
                        <div key={index} style={{margin:'2px', border:'2px solid black', borderRadius:'25px'}}>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                            <Link to={`/product/edit/${product._id}`}><button style={{background:'blue', color:'white', margin:'3px'}}>Edit</button></Link>
                            <button onClick={(e)=>{deleteProduct(product._id)}} style={{background:'red', color:'white', margin:'3px'}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;
