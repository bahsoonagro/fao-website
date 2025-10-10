import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#005EB8] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">FAO Sierra Leone</h2>
          <p className="text-gray-100 leading-relaxed">
            Supporting sustainable land governance, women’s land rights, and improved food security in Sierra Leone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "News", path: "/news" },
              { name: "Projects", path: "/projects" },
              { name: "Gallery", path: "/gallery" },
              { name: "GRM", path: "/grm" },
              { name: "Resources", path: "/resources" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-blue-200 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-gray-100">FAO Sierra Leone</p>
          <p className="text-gray-100">Freetown, Sierra Leone</p>
          <p className="text-gray-100">Email: fao.sl@fao.org</p>
          <p className="text-gray-100">Phone: +232 XXX XXX XXX</p>
        </div>
      </div>

      <div className="bg-[#004C91] text-center py-4 text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} FAO Sierra Leone. All rights reserved.
      </div>
    </footer>
  );
}
