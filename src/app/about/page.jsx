"use client";

export default function AboutPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">

      {/* HERO SECTION */}
      <section className="relative text-white py-20 px-4 text-center overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 opacity-90"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-30 -top-40 -left-40"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-400 rounded-full blur-[120px] opacity-30 bottom-0 right-0"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About Our Institute
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-200">
            Empowering students with practical skills, certified training, and career-focused education.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a modern computer training institute dedicated to providing high-quality 
              education in the field of technology and digital skills. Our goal is to bridge 
              the gap between theoretical knowledge and real-world industry requirements.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              With a team of experienced instructors and industry professionals, we offer 
              practical, hands-on training in areas such as web development, graphic design, 
              digital marketing, and computer fundamentals.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We also provide certified programs that enhance credibility and open doors 
              to career opportunities both in India and abroad.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition"></div>

            <img
              src="/about.jpg"
              alt="About Us"
              className="relative w-full h-[350px] md:h-[420px] object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* CARD */}
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Our mission is to provide accessible, affordable, and high-quality education 
              that equips students with practical skills and prepares them for real-world challenges.
            </p>
          </div>

          {/* CARD */}
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Vision
            </h3>
            <p className="text-gray-600">
              Our vision is to become a leading training institute recognized for excellence 
              in education, innovation, and student success globally.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-gray-800">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            "Expert Trainers",
            "Practical Learning",
            "Certified Courses",
            "Affordable Fees",
            "Career Support",
            "Modern Infrastructure",
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100"
            >
              <h4 className="font-semibold mb-2 text-lg text-gray-800 group-hover:text-purple-600 transition">
                {item}
              </h4>
              <p className="text-gray-500 text-sm">
                High-quality experience designed for your growth and success.
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}