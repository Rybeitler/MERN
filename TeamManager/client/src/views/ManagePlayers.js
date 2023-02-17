import React, {useState, useEffect} from 'react';
import AddPlayer from '../components/AddPlayer';
import PlayerList from '../components/PlayerList';


const ManagePlayers = () => {
    const [activePage, setActivePage] = useState(0)
    const [listButton, setListButton] = useState({})
    const [addPButton, setAddPButton] = useState({})

    useEffect(()=>{
        if(activePage===0){
            setListButton({})
            setAddPButton({backgroundColor:'var(--bs-success-bg-subtle', color:'var(--bs-success-text'})
        }else{
            setListButton({backgroundColor:'var(--bs-success-bg-subtle', color:'var(--bs-success-text'})
            setAddPButton({})
        }
    },[activePage])

    return (
        <div className='container border border-dark'>
            <button className='btn btn-success m-2' onClick={(e)=>setActivePage(0)} style={listButton}>Player List</button>
            <button className="btn btn-success m-2" onClick={(e)=>setActivePage(1)} style={addPButton}>Add a Player</button>
            {
                activePage===0?
                    <PlayerList/>:
                    <AddPlayer setActivePage={setActivePage}/>
            }
        </div>
    );
}

export default ManagePlayers;
