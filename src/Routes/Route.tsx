import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Portfolio from "../pages/Portfolio.tsx";
import Contact from "../pages/Contact.tsx";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
