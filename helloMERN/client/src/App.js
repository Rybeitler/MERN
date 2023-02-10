import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import './App.css';
import React from 'react'
import { Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/" default />
        <Route element={<Detail/>} path="/people/:id" />
        <Route element={<Update/>} path="/people/edit/:id"/>
      </Routes>
    </div>
  );
}

export default App;
