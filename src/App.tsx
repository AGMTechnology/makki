import React from 'react';
import logo from './logo.svg'
import './App.css';
import { Routes, Route } from "react-router-dom"

import Nav from './components/Nav';
import Account from './components/Account';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Home from './components/Home';
import Oops from './components/Oops';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Nav />} path={"/"} >
          <Route element={<Home />} index  />
          <Route element={<Account />} path="account"  />
          <Route element={<Orders />} path="orders"  />
          <Route element={<Cart />} path="cart"  />
          <Route path="*" element={<Oops />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
