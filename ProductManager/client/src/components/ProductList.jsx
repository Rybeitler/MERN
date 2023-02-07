import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    const {products, setProducts} = props;

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
                        <div key={index}>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;
