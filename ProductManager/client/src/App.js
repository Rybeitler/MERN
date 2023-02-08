import React from 'react';
import Main from './views/Main'
import ProductDetails from './components/ProductDetails'
import UpdateProduct from './components/UpdateProduct';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path='/' default />
        <Route element={<ProductDetails/>} path='/product/:id'/>
        <Route element={<UpdateProduct/>} path='/product/edit/:id'/>
      </Routes>
    </div>
  );
}

export default App;
