import React from 'react';
import { BrowserRouter, Routes, Route, Redirect, } from 'react-router-dom';
import Home from './pages/Home/Home';
import Visit from './pages/Visit/Visit';
import Shop from './pages/Shop/Shop';
import Auth from './pages/Auth/Auth';
import Challenge from './pages/Challenge/Challenge';
import Dashboard from './pages/Challenge/Dashboard';
import Confirm from './pages/Challenge/Confirm';
import "./style/calendar.css";
import "./style/table.css";
import "./style/modal.css"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;