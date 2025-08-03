import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import Header from "./components/Header";

import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Audience from "./pages/Audience";
import WhyChoose from "./pages/WhyChoose";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#" element={<Overview />} />
        <Route path="#" element={<Audience />} />
        <Route path="#" element={<WhyChoose />} />
        <Route path="#" element={<Pricing />} />
        <Route path="#" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>


    </>
  );
}

export default App;
