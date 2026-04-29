"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About Janasanjog Computer Institute
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Empowering youth with modern computer education and shaping future professionals.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Janasanjog Computer Institute is a leading computer training institute dedicated 
            to providing quality education, practical knowledge, and skill-based training for 
            students of all categories.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower youth with modern computer education and prepare them 
            for successful careers in the digital world.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">
            Our Philosophy
          </h3>
          <p className="text-gray-600">
            We believe in <span className="font-semibold text-blue-600">“Learning by Doing”</span>, 
            where students gain hands-on practical experience along with theoretical knowledge.
          </p>
        </div>

      </section>

      {/* COURSES */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">
            Our Courses
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "ADCA",
              "DCA",
              "PGDCA",
              "Tally Prime",
              "DTP",
              "Basic Computer",
              "Typing Courses"
            ].map((course, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-gray-700">
                  {course}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl text-blue-600 mb-2">
              Practical Training
            </h3>
            <p className="text-gray-600">
              Hands-on learning with real projects to build strong technical skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl text-blue-600 mb-2">
              Expert Faculty
            </h3>
            <p className="text-gray-600">
              Experienced teachers providing personal guidance and support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl text-blue-600 mb-2">
              Career Support
            </h3>
            <p className="text-gray-600">
              Personality development, communication skills, and job guidance.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="mb-10 text-lg opacity-90">
            To create a bright future for students through affordable education, 
            disciplined learning, and continuous support.
          </p>

          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg opacity-90">
            To become a trusted and leading center for computer education in Assam.
          </p>
        </div>
      </section>

      {/* FOOTER QUOTE */}
      <section className="py-12 text-center bg-gray-900 text-white">
        <h3 className="text-2xl font-semibold italic">
          “Learn Today, Lead Tomorrow.”
        </h3>
      </section>

    </div>
  );
}