import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-32 flex flex-col md:flex-row items-center">
          {/* Text */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Innovative Solutions for Land Dispute Resolution in Sierra Leone
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Empowering women, youth, and vulnerable populations through sustainable land governance and dispute resolution initiatives.
            </p>
            <a
              href="/resources"
              className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition duration-300"
            >
              Explore Resources
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/land-governance.jpg"
              alt="Land governance"
              className="rounded shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom curve for style */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-24"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.64,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#f9fafb" }}
            ></path>
          </svg>
        </div>
      </section>

      {/* Quick Links / Highlights Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Key Areas of Focus
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Women’s Land Rights</h3>
            <p className="text-gray-700">
              Promoting gender equality and strengthening women's decision-making power in land governance.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Dispute Resolution</h3>
            <p className="text-gray-700">
              Piloting innovative approaches for resolving land disputes efficiently and transparently.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Stakeholder Dialogue</h3>
            <p className="text-gray-700">
              Facilitating multi-stakeholder collaboration to improve land governance systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

