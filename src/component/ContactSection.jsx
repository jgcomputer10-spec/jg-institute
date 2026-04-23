"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

const handleSubmit = (e) => {
  e.preventDefault();

  const message = `📩 New Contact Form Submission:

👤 Name: ${form.firstName} ${form.lastName}
📧 Email: ${form.email}
📱 Phone: ${form.phone}

📝 Message:
${form.message}`;

  const phoneNumber = "917002416852"; // 👉 put your WhatsApp number

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
  return (
    <section className="py-20 px-4 bg-gray-50">

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10">
          Get in Touch
        </h2>

        {/* FORM BOX */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 shadow-sm"
        >

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">

            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.lastName}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
              />
            </div>

          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="+1234567890"
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
            </div>

          </div>

          {/* MESSAGE */}
          <div className="mb-6">
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Anything else you wanna communicate"
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            ></textarea>
          </div>

          {/* BUTTON */}
          <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition">
            Submit
          </button>

        </form>
      </div>
    </section>
  );
}