import './App.css';
import React from 'react'

import Authors from './components/Authors';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route element={<Authors/>} path={'/'} default />
        <Route element={<AddAuthor/>} path={'/author/add'}/>
        <Route element={<EditAuthor/>} path={'/author/edit/:id'}/>
      </Routes>
    </div>
  );
}

export default App;
