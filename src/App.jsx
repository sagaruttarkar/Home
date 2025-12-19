import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallary from './pages/Gallary';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  // useEffect(() => {
  //   // Tawk.to live chat
  //   const script = document.createElement('script');
  //   script.async = true;
  //   script.src = 'https://embed.tawk.to/68da3da2dbcb9a194d15a5e1/1j6a81gq7';
  //   script.charset = 'UTF-8';
  //   script.setAttribute('crossorigin', '*');
  //   document.body.appendChild(script);
  // }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
