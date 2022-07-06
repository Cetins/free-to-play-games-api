import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamesBox from './containers/GamesBox';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GamesBox/>}/>
        <Route path='/Game/:game.id'/>
      </Routes>
    </Router>
  )
};

export default App;