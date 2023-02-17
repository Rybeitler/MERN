import React, {useState, useEffect} from 'react';
import Game from '../components/Game';

const PlayerStatus = () => {
    const [activePage, setActivePage] = useState('one')
    const [gameOne, setGameOne] = useState({})
    const [gameTwo, setGameTwo] = useState({})
    const [gameThree, setGameThree] = useState({})

    useEffect(()=>{
        if(activePage==='one'){
            setGameOne({})
            setGameTwo({backgroundColor:'var(--bs-info-bg-subtle', color:'var(--bs-info-text'})
            setGameThree({backgroundColor:'var(--bs-info-bg-subtle', color:'var(--bs-info-text'})
        }else if(activePage==='two'){
            setGameOne({backgroundColor:'var(--bs-info-bg-subtle', color:'var(--bs-info-text'})
            setGameTwo({})
            setGameThree({backgroundColor:'var(--bs-info-bg-subtle', color:'var(--bs-info-text'})
        }else{
            setGameOne({backgroundColor:'var(--bs-info-bg-subtle', color:'var(--bs-info-text'})
            setGameTwo({backgroundColor:'var(--bs-info-bg-subtle', color:'var(--bs-info-text'})
            setGameThree({})
        }
    },[activePage])

    return (
        <div className='container border border-dark'>
            <h2>Player Status</h2>
            <div>
            <button className='btn btn-info m-2' onClick={(e)=>setActivePage('one')} style={gameOne}>Game 1</button>
            <button className="btn btn-info m-2" onClick={(e)=>setActivePage('two')} style={gameTwo}>Game 2</button>
            <button className="btn btn-info m-2" onClick={(e)=>setActivePage('three')} style={gameThree}>Game 3</button>
            </div>
            <Game activeGame={activePage}/>
        </div>
    );
}

export default PlayerStatus;
