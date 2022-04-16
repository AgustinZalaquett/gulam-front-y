import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calendar from './views/Calendar';

export default function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}
