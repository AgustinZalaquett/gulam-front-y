import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from './routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <RouteList />
    </Router>
  );
}

export default App;
