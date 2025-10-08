import React from "react";

export default function GRM() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Grievance Redress Mechanism (GRM)</h1>
      <p className="text-gray-700 mb-4">
        The GRM allows community members to report and resolve land-related grievances transparently and ethically.
      </p>
      <form className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <label className="block mb-2 font-semibold text-gray-700">Full Name</label>
        <input className="w-full border p-2 mb-4 rounded-md" placeholder="Enter your name" />
        <label className="block mb-2 font-semibold text-gray-700">Email or Phone</label>
        <input className="w-full border p-2 mb-4 rounded-md" placeholder="Enter your contact" />
        <label className="block mb-2 font-semibold text-gray-700">Your Complaint</label>
        <textarea className="w-full border p-2 mb-4 rounded-md" rows="4" placeholder="Describe your grievance" />
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

