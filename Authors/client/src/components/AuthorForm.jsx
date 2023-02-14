import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const AuthorForm = (props) => {
    const {iName, subProp, errors} = props;
    const [name, setName] = useState(iName)


    const onSubmitHandler = (e)=>{
        e.preventDefault()
        subProp({name})
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    {errors?<p style={{color:'red'}}>{errors}</p>:null}
                </div>
                <button>Submit</button>
                {
                    iName!==''?<Link to={'/'}><button>Cancel</button></Link>:null
                }
            </form>
        </div>
    );
}

export default AuthorForm;
