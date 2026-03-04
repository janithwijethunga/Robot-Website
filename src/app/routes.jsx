import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Architecture = lazy(() => import("../pages/Architecture/Architecture"));
const Features = lazy(() => import("../pages/Features/Features"));
const Hardware = lazy(() => import("../pages/Hardware/Hardware"));
const Software = lazy(() => import("../pages/Software/Software"));
const Results = lazy(() => import("../pages/Results/Results"));
const References = lazy(() => import("../pages/References/References"));
const FAQ = lazy(() => import("../pages/FAQ/FAQ"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/features" element={<Features />} />
      <Route path="/hardware" element={<Hardware />} />
      <Route path="/software" element={<Software />} />
      <Route path="/results" element={<Results />} />
      <Route path="/references" element={<References />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}