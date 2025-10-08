import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Submission:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-12">
        Contact Us
      </h1>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {submitted && (
            <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center">
              Thank you! Your message has been sent.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* FAO Sierra Leone Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            FAO Sierra Leone
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 2 Smart Farm, Wilkinson Road, Freetown
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> fao.sl@fao.org
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +232 76 123456
          </p>
          <p className="text-gray-700">
            <strong>Office Hours:</strong> Mon-Fri, 8:00 AM – 5:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}

