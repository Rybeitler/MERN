import React, { useState} from 'react'

const PersonForm = (props)=>{
    const {initialFirstName, initialLastName, onSubmitProp} = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        onSubmitProp({firstName, lastName})
        setFirstName(initialFirstName)///reset entry fields
        setLastName(initialLastName)
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default PersonForm;