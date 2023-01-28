
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import Main from './components/pages/Main';
import Menu from './components/pages/Menu';
import Story from './components/pages/Story';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/story' element={<Story />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
