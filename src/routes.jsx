import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calendar from './views/Calendar';
import Login from './views/LogIn';
import SignUp from './views/SignUp';

export default function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  );
}
