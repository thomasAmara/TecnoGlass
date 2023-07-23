import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/homeComponent/Hero';
import Installation from '../components/homeComponent/Installation';
import Products from '../components/homeComponent/Products';
import Aboutus from '../components/homeComponent/AboutUs';
import Client from '../components/homeComponent/Client';
import Projects from '../components/homeComponent/Projects';
import Contact from '../components/homeComponent/Contact';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Installation />
      <Aboutus />
      <Client />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
