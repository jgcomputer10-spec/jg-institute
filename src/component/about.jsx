"use client";

export default function AboutPage() {
  return (
    <div className="pt-24">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white py-16 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About Our Institute
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Empowering students with practical skills, certified training, and career-focused education.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
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
              digital marketing, and computer fundamentals. Our courses are designed to help 
              students gain confidence, build projects, and become job-ready.
            </p>

            <p className="text-black leading-relaxed">
              We also provide certified programs that enhance credibility and open doors 
              to career opportunities both in India and abroad.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="bg-gray-200 rounded-2xl h-[300px] md:h-[400px] flex items-center justify-center">
            <img
              src="/about.jpg"
              alt="About Us"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to provide accessible, affordable, and high-quality education 
              that equips students with practical skills and prepares them for real-world 
              challenges in the digital era.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              Our vision is to become a leading training institute recognized for excellence 
              in education, innovation, and student success across national and international platforms.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="p-6 rounded-2xl shadow-md bg-white">
            <h4 className="font-semibold mb-2">Expert Trainers</h4>
            <p className="text-gray-600 text-sm">
              Learn from industry professionals with real-world experience.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white">
            <h4 className="font-semibold mb-2">Practical Learning</h4>
            <p className="text-gray-600 text-sm">
              Hands-on training with real projects and assignments.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white">
            <h4 className="font-semibold mb-2">Certified Courses</h4>
            <p className="text-gray-600 text-sm">
              Get recognized certificates to boost your career.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white">
            <h4 className="font-semibold mb-2">Affordable Fees</h4>
            <p className="text-gray-600 text-sm">
              Quality education at reasonable pricing.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white">
            <h4 className="font-semibold mb-2">Career Support</h4>
            <p className="text-gray-600 text-sm">
              Guidance for jobs, freelancing, and internships.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white">
            <h4 className="font-semibold mb-2">Modern Infrastructure</h4>
            <p className="text-gray-600 text-sm">
              Well-equipped labs and updated technology.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}