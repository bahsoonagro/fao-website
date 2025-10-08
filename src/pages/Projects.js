import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Women’s Land Rights Program",
    status: "Ongoing",
    image: "https://source.unsplash.com/400x250/?women,land",
    summary:
      "Empowering women to claim and exercise their land rights through training and community engagement.",
  },
  {
    id: 2,
    title: "Land Dispute Resolution Pilot",
    status: "Ongoing",
    image: "https://source.unsplash.com/400x250/?land,dispute",
    summary:
      "Testing innovative approaches to resolve local land disputes quickly and fairly in selected districts.",
  },
  {
    id: 3,
    title: "Customary Land Registration Awareness",
    status: "Planned",
    image: "https://source.unsplash.com/400x250/?policy,registration",
    summary:
      "Raising awareness and assisting communities in registering their customary land to strengthen tenure security.",
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <h1 className="text-4xl font-bold text-green-700 mb-8">Our Projects</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold text-green-700">{project.title}</h2>
                  <span
                    className={`px-2 py-1 rounded text-sm font-semibold ${
                      project.status === "Ongoing"
                        ? "bg-green-100 text-green-800"
                        : project.status === "Completed"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-700">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

