import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home";
import ProductDetailPage from "./pages/ProductDetailPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Scroll from 'smooth-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CategoryPage from "./pages/categoryPage";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const scroll = new Scroll({
      selector: '[data-scroll]',
      speed: 800,
      speedAsDuration: true,
      offset: 70,
    });

    return () => {
      scroll.destroy();
    };
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollHandler />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetailPage />} />
            <Route path="/categoria/:id" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;