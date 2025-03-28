import React, { useEffect } from 'react'
import './index.css';
import Home from "./routes/Home/Home"
import About from "./routes/About/About"
import Contact from "./routes/Contact/Contact"
import { Route, Routes } from 'react-router-dom';

function App() {

  const reminder = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      alert("网站带有悬浮交互，建议使用电脑进行浏览\nThis site has interactive hover effects, best viewed on desktop")
    }
  }

  useEffect(() => {
    reminder()
  }, [])

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
