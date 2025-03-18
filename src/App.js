import React from 'react'
import './index.css';
import Home from "./routes/Home/Home"

import About from "./routes/About/About"
import Contact from "./routes/Contact/Contact"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* define Router*/}
      <Routes >
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
