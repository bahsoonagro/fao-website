import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Projects from "./pages/Projects";
import GRM from "./pages/GRM";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import LATassessment from "./pages/LATassessment";


export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <header className="bg-white shadow fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-green-700 font-bold text-xl">
              FAO Sierra Leone
            </Link>
            <nav className="space-x-4">
              <Link
                to="/"
                className="text-green-700 hover:text-green-800 font-semibold"
              >
                Home
              </Link>
              <Link
                to="/news"
                className="text-green-700 hover:text-green-800 font-semibold"
              >
                News
              </Link>
              <Link
                to="/projects"
                className="text-green-700 hover:text-green-800 font-semibold"
              >
                Projects
              </Link>
              <Link
                to="/grm"
                className="text-green-700 hover:text-green-800 font-semibold"
              >
                GRM
              </Link>
              <Link
                to="/resources"
                className="text-green-700 hover:text-green-800 font-semibold"
              >
                Resources
              </Link>
              <Link
                to="/gallery"
                className="text-green-700 hover:text-green-800 font-semibold"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-green-700 hover:text-green-800 font-semibold"
              >
                Contact
              </Link>
            </nav>
          </div>
          {/* Slim separator */}
          <div className="border-t border-gray-200"></div>
        </div>
      </header>

      {/* Page content */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/grm" element={<GRM />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lat-assessment" element={<LATassessment />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          &copy; {new Date().getFullYear()} FAO Sierra Leone. All rights reserved.
        </div>
      </footer>
    </Router>
  );
}

