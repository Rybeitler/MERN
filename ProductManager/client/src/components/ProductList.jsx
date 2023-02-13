import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const {allProducts} = props;
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
            .then((res)=>{
                setProducts(res.data);
                console.log(res.data);
                
            })
            .catch((err)=>console.log(err))
    },[allProducts])
    const removeFromDom = (productId)=>{
        setProducts(products.filter(product=>product._id !== productId))
    }
    return (
        <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>

            {
                products.map((product, index)=>{
                    return(
                        <div key={index} style={{margin:'2px', border:'2px solid black', borderRadius:'25px', height:'100px',width:'100px'}}>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                            <br/>
                            <Link to={`/product/edit/${product._id}`}><button style={{background:'blue', color:'white', margin:'3px'}}>Edit</button></Link>
                            <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;
