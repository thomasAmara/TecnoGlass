import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactContainer from '../components/contact/ContactContainer';

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactContainer/>
      <Footer />
    </div>
  );
}

export default Contact;
