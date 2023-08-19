import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
