import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}