import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Interests from './components/Interests';

function App() {
  return (
    <>
      <Header />
      <Interests />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
