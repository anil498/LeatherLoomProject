import React from 'react';
import MainLayout from './layouts/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <MainLayout/>
    </BrowserRouter>
  );
}

export default App;
