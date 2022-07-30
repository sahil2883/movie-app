import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Index';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id/:search" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
