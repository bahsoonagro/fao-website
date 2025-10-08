import React from "react";

export default function Gallery() {
  const images = [
    "https://www.fao.org/images/project1.jpg",
    "https://www.fao.org/images/project2.jpg",
    "https://www.fao.org/images/project3.jpg",
    "https://www.fao.org/images/project4.jpg",
    "https://www.fao.org/images/project5.jpg",
    "https://www.fao.org/images/project6.jpg",
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-12">
        Gallery
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

