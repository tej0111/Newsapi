import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Newsapp from './Components/Newsapp';
import CategoryNews from './Components/CategoryNews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Newsapp />} />
        <Route path="/category/:category" element={<CategoryNews />} />
      </Routes>
    </Router>
  );
}

export default App;