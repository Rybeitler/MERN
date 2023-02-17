import React, {useState} from 'react'
import ManagePlayers from './views/ManagePlayers';
import PlayerStatus from './views/PlayerStatus'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  const [activeView, setActiveView] = useState(0)

  return (
    <div className="App">
      <Nav activeView={activeView} setActiveView={setActiveView} />
      {
        activeView===0?
          <ManagePlayers/>:
          <PlayerStatus/>
      }
    </div>
  );
}

export default App;
