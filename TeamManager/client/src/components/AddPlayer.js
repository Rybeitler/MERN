import React, {useState} from 'react';
import axios from 'axios'
const AddPlayer = (props) => {
    const {setActivePage} = props;
    const [name, setName] = useState('')
    const [prefPos, setPrefPos] = useState('undecided')
    const [errors, setErrors] = useState({})
    const [buttonState, setButtonState] = useState(true)
    const [frontEndVal, setFrontEndVal] = useState('Please provide a player name')

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/player', {
            name,
            prefPos
        })
        .then(res=>{
            console.log(res)
            setActivePage(0)
        })
        .catch(err=>{
            console.log(err.response.data.errors.name.message)
            setErrors(err.response.data.errors)
        })
    }
    const nameVal = (e)=>{
        if(e.target.value.length ===0){
            setButtonState(true)
            setFrontEndVal('Please provide a player name')
        }else if(e.target.value.length <2){
            setButtonState(true)
            setFrontEndVal('Player names must be at least 2 characters')
        }else{
            setFrontEndVal('')
            setButtonState(false)
            setName(e.target.value)
        }
    }
    return (
        <div className='container border border-success m-2'>
            <h2>Add a player</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" name='name' onChange={nameVal}/>
                    {
                        frontEndVal?<p style={{color:'red'}}>{frontEndVal}</p>:null
                    }
                    {
                    errors.name?<p style={{color:'red'}}>{errors.name.message}</p>:null
                    }
                </div>
                <div className="mb-3">
                    <label  className="form-label">Preferred Position:</label>
                    <input type="text" name='prefPos' onChange={(e)=>setPrefPos(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success m-2" disabled={buttonState}>Submit</button>
            </form>
        </div>
    );
}

export default AddPlayer;
