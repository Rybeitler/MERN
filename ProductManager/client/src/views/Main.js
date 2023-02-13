import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList'
import axios from 'axios';

const Main = () => {
    const [allProducts, setAllProducts]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
            .then((res)=>{
                setAllProducts(res.data);
            })
            .catch((err)=>console.log(err))
    },[])
    

    const createProduct = (formData) =>{
        axios.post('http://localhost:8000/api/product', formData)
            .then(res=>{
                setAllProducts([...allProducts, res.data])
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h2>Add a Product!</h2>
            <ProductForm onSubProp={createProduct} initTitle='' initPrice='' initDesc=''/>
            <hr/>
            <ProductList allProducts={allProducts}/>
        </div>
    );
};

;


export default Main;
