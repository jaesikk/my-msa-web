import React from 'react';
import { BrowserRouter, Routes, Route, Redirect, } from 'react-router-dom';
import Home from './pages/Home/Home';
import Visit from './pages/Visit/Visit';
import Shop from './pages/Shop/Shop';
import Auth from './pages/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;