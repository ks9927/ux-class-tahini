import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import Travel from './Pages/Travel'
import Experiences from './Pages/Experiences'
import Contact from './Pages/Contact'
import FAQ from './Pages/FAQ'
import Booking from './Pages/Booking'
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="travel" element={<Travel />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
