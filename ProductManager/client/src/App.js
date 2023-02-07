import React from 'react';
import Main from './views/Main'
import ProductDetails from './components/ProductDetails'
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path='/' default />
        <Route element={<ProductDetails/>} path='/product/:id'/>
      </Routes>
    </div>
  );
}

export default App;
