import React, {useState} from 'react';



const ProductForm = (props) => {
    const {initTitle, initPrice, initDesc, onSubProp} = props;
    const [title, setTitle] = useState(initTitle)
    const [price, setPrice] = useState(initPrice)
    const [description, setDescription] = useState(initDesc)
    
    const submitHandler = (e)=>{
        e.preventDefault();
        onSubProp({title, price, description});
        setTitle(initTitle);
        setPrice(initPrice);
        setDescription(initDesc)
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
