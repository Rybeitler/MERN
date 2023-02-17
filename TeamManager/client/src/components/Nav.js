import React, {useState, useEffect} from 'react';

const Nav = (props) => {
    const {activeView, setActiveView, toggleView} = props;
    const [manageButton, setManageButton] = useState({})
    const [statusButton, setStausButton] = useState({})

    useEffect(()=>{
        if(activeView===0){
            setManageButton({})
            setStausButton({backgroundColor:'var(--bs-primary-bg-subtle', color:'var(--bs-primary-text'})
        }else{
            setManageButton({backgroundColor:'var(--bs-primary-bg-subtle', color:'var(--bs-primary-text'})
            setStausButton({})
        }
    },[activeView])

    return (
        <div className='d-flex justify-content-between container'>
            <h2>Manage your team!</h2>
            <div>
                <button className='btn btn-primary m-2'  onClick={(e)=>setActiveView(0)} style={manageButton}>Manage Players</button>
                <button className='btn btn-primary m-2' onClick={(e)=>setActiveView(1)} style={statusButton}>Player Status</button>
            </div>
        </div>
    );
}

export default Nav;


// style={}