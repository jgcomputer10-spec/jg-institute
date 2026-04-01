"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sonali Bhattacharya",
    role: "CEO, Parkview International Ltd",
    image: "/photo6.jpg",
    text: "The courses transformed my career! The practical approach and expert mentorship made all the difference.",
  },
  {
    name: "Rahul Sharma",
    role: "Founder, TechWave Solutions",
    image: "/photo1.jpg",
    text: "Engaging content and flexible learning schedules helped me upskill without disrupting my work.",
  },
  {
    name: "Anup Dey ",
    role: "Product Manager, InnovateX",
    image: "/photo3.avif",
    text: "Highly recommend! The hands-on projects and supportive community boosted my confidence and skills.",
  },
  {
    name: "Akash Verma",
    role: "Software Engineer",
    image: "/photo4.jpg",
    text: "This institute helped me land my first job. Highly practical and career-focused training.",
  },
  {
    name: "Anjali Das",
    role: "Designer",
    image: "/photo5.jpg",
    text: "Amazing experience with real-world projects and supportive mentors.",
  },
  {
    name: "Amit Roy",
    role: "Freelancer",
    image: "/photo2.jpg",
    text: "I gained confidence and started earning through freelancing after completing the course.",
  },
];

export default function TestimonialsPremium() {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + itemsPerSlide >= testimonials.length ? 0 : prev + itemsPerSlide
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visible = testimonials.slice(index, index + itemsPerSlide);

  return (
    <section className="py-20 px-4 bg-gray-50">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          What Our <br /> Learners Say
        </h2>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {visible.map((t, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl shadow-md p-6 pt-14 hover:shadow-xl transition"
          >

            {/* PROFILE IMAGE */}
            <div className="absolute -top-8 left-6">
              <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t.text}
            </p>

            {/* NAME */}
            <h4 className="font-semibold text-lg">
              {t.name}
            </h4>

            <p className="text-sm text-gray-500 mb-3">
              {t.role}
            </p>

            {/* STARS */}
            <div className="text-yellow-500 text-lg">
              ⭐⭐⭐⭐⭐
            </div>

          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({
          length: Math.ceil(testimonials.length / itemsPerSlide),
        }).map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i * itemsPerSlide)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i * itemsPerSlide
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
}