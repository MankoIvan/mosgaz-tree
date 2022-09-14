import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CircularTree from './pages/CircularTree/CircularTree';
import HorizontalTree from './pages/HorizontalTree/HorizontalTree';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HorizontalTree />} />
      <Route path='/circular' element={<CircularTree />} />
    </Routes>
  );
}

export default App;
