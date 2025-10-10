import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-[#005EB8] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">FAO Sierra Leone</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
