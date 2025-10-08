import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-green-700 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">FAO Sierra Leone</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

