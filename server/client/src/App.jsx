import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster position='top-center'/>
      
      </BrowserRouter>
    </div>
  )
}

export default App
