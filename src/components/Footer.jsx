import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">FAO Sierra Leone</h2>
          <p className="text-gray-200">
            Supporting sustainable land governance, women’s land rights, and improved food security in Sierra Leone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-gray-300">News</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
            </li>
            <li>
              <Link to="/grm" className="hover:text-gray-300">GRM</Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-gray-300">Resources</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-gray-200">FAO Sierra Leone</p>
          <p className="text-gray-200">Freetown, Sierra Leone</p>
          <p className="text-gray-200">Email: fao.sl@fao.org</p>
          <p className="text-gray-200">Phone: +232 XXX XXX XXX</p>
        </div>
      </div>

      <div className="bg-blue-800 text-center py-4 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} FAO Sierra Leone. All rights reserved.
      </div>
    </footer>
  );
}

