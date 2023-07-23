import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/AboutUs'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/aboutus' element={<About />} />
      </Routes>
      ;
    </Suspense>
  );
}

export default App;
