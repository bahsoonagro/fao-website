import React from "react";

const newsData = [
  {
    id: 1,
    title: "Land Rights Training for Women",
    date: "Oct 1, 2025",
    image: "https://source.unsplash.com/400x250/?women,farming",
    summary:
      "FAO organized a workshop to strengthen women’s land rights across several districts in Sierra Leone.",
  },
  {
    id: 2,
    title: "Innovative Dispute Resolution Piloted",
    date: "Sep 20, 2025",
    image: "https://source.unsplash.com/400x250/?land,community",
    summary:
      "A pilot program was launched to test innovative approaches to resolve local land disputes effectively.",
  },
  {
    id: 3,
    title: "National Land Policy Awareness Campaign",
    date: "Sep 10, 2025",
    image: "https://source.unsplash.com/400x250/?policy,seminar",
    summary:
      "Communities were engaged to raise awareness of the National Land Policy and the new Customary Land Rights Act.",
  },
];

export default function News() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <h1 className="text-4xl font-bold text-green-700 mb-8">Latest News</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-green-700 mb-2">{item.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{item.date}</p>
                <p className="text-gray-700 mb-4">{item.summary}</p>
                <a
                  href="#"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

