import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
