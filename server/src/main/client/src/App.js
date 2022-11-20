import React from 'react';
import { BrowserRouter, Routes, Route, Redirect, } from 'react-router-dom';
import Home from './pages/Home/Home';
import Visit from './pages/Visit/Visit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;