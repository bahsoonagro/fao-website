import React from "react";

const resourcesData = [
  {
    id: 1,
    title: "National Land Policy 2015",
    description: "Full document outlining land sector reforms and governance.",
    file: "/files/National_Land_Policy_2015.pdf",
    type: "pdf",
  },
  {
    id: 2,
    title: "Customary Land Rights Act 2022",
    description: "Guidelines for customary land registration and women's land rights.",
    file: "/files/Customary_Land_Rights_Act_2022.pdf",
    type: "pdf",
  },
  {
    id: 3,
    title: "Land Dispute Resolution Manual",
    description: "Step-by-step manual for mediators and local authorities.",
    file: "/files/Land_Dispute_Resolution_Manual.pdf",
    type: "pdf",
  },
  {
    id: 4,
    title: "Gender Awareness Toolkit",
    description: "Tools and guidelines for gender-sensitive land governance.",
    file: "/files/Gender_Awareness_Toolkit.pdf",
    type: "pdf",
  },
];

export default function Resources() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <h1 className="text-4xl font-bold text-green-700 mb-8">Resources</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resourcesData.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-green-700 mb-2">{res.title}</h2>
                <p className="text-gray-700 mb-4">{res.description}</p>
              </div>
              <a
                href={res.file}
                download
                className="inline-block mt-auto bg-green-700 text-white font-semibold px-4 py-2 rounded shadow hover:bg-green-800 transition duration-300 text-center"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

