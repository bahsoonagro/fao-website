import React, { useState } from "react";

export default function GRM() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Grievance Redress Mechanism (GRM)
        </h1>
        <p className="text-gray-700 text-lg">
          A formal process to raise concerns or complaints and seek fair, timely resolution.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {/* What is GRM */}
        <div>
          <button
            onClick={() => toggleSection("what")}
            className="w-full text-left bg-green-100 text-green-800 font-semibold px-4 py-3 rounded shadow hover:bg-green-200 transition"
          >
            What is GRM?
          </button>
          {openSections.what && (
            <div className="mt-2 p-4 bg-white rounded shadow">
              <p>
                A Grievance Redress Mechanism (GRM) is a formal process that allows
                any individual or group affected by the AFR100 Programme to raise
                concerns or complaints and seek fair, timely resolution.
              </p>
            </div>
          )}
        </div>

        {/* Why is it important */}
        <div>
          <button
            onClick={() => toggleSection("why")}
            className="w-full text-left bg-green-100 text-green-800 font-semibold px-4 py-3 rounded shadow hover:bg-green-200 transition"
          >
            Why is it important?
          </button>
          {openSections.why && (
            <div className="mt-2 p-4 bg-white rounded shadow space-y-2">
              <p>Trust, transparency, and accountability are core principles.</p>
              <ul className="list-disc list-inside">
                <li>Uphold strong environmental and social safeguards</li>
                <li>Provide a safe, accessible, and confidential way to raise concerns</li>
                <li>Ensure grievances are addressed quickly, fairly, and effectively</li>
              </ul>
            </div>
          )}
        </div>

        {/* Who can use */}
        <div>
          <button
            onClick={() => toggleSection("who")}
            className="w-full text-left bg-green-100 text-green-800 font-semibold px-4 py-3 rounded shadow hover:bg-green-200 transition"
          >
            Who can use the GRM?
          </button>
          {openSections.who && (
            <div className="mt-2 p-4 bg-white rounded shadow space-y-2">
              <p>Any individual, group, or organization affected by programme activities, including:</p>
              <ul className="list-disc list-inside">
                <li>Local communities</li>
                <li>National and decentralized governments</li>
                <li>Indigenous Peoples</li>
                <li>Forest and farm producer organizations</li>
                <li>Micro, small and medium-sized enterprises</li>
              </ul>
            </div>
          )}
        </div>

        {/* Types of grievances */}
        <div>
          <button
            onClick={() => toggleSection("types")}
            className="w-full text-left bg-green-100 text-green-800 font-semibold px-4 py-3 rounded shadow hover:bg-green-200 transition"
          >
            Types of grievances
          </button>
          {openSections.types && (
            <div className="mt-2 p-4 bg-white rounded shadow space-y-2">
              <p>Examples of concerns may include:</p>
              <ul className="list-disc list-inside">
                <li>Environmental damage or risk (deforestation, land degradation, biodiversity loss)</li>
                <li>Social harm or exclusion (marginalization, gender-based discrimination)</li>
                <li>Violations of Free, Prior, and Informed Consent (FPIC)</li>
                <li>Disputes over participation or benefit-sharing</li>
                <li>Labour violations under programme contractors</li>
                <li>Corruption, misuse of funds, or ethical misconduct</li>
              </ul>
            </div>
          )}
        </div>

        {/* How to submit a complaint */}
        <div>
          <button
            onClick={() => toggleSection("submit")}
            className="w-full text-left bg-green-100 text-green-800 font-semibold px-4 py-3 rounded shadow hover:bg-green-200 transition"
          >
            How to submit a complaint
          </button>
          {openSections.submit && (
            <div className="mt-2 p-4 bg-white rounded shadow space-y-3">
              <p>Provide the following to facilitate review:</p>
              <ul className="list-disc list-inside">
                <li>Your name and contact details</li>
                <li>Description of the issue</li>
                <li>Date/time and location of the incident</li>
                <li>Names of people or organizations involved</li>
                <li>Any actions already taken</li>
              </ul>
              <p>Email complaints to: <a href="mailto:AFR-100-Programme@fao.org" className="text-green-700 underline">AFR-100-Programme@fao.org</a></p>
              <p>Other channels (phone, WhatsApp) will be available via the AFR100 website soon.</p>
            </div>
          )}
        </div>

        {/* Confidentiality & Non-retaliation */}
        <div>
          <button
            onClick={() => toggleSection("confidentiality")}
            className="w-full text-left bg-green-100 text-green-800 font-semibold px-4 py-3 rounded shadow hover:bg-green-200 transition"
          >
            Confidentiality & Non-Retaliation
          </button>
          {openSections.confidentiality && (
            <div className="mt-2 p-4 bg-white rounded shadow">
              <p>
                FAO prohibits retaliation against anyone raising concerns. Confidentiality will be maintained upon request.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

