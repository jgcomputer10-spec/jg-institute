"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "(MERN) Full-Stack Development",
    instructor: "James Nolan",
    image: "/course1.jpg",
    rating: 4.4,
    price: 20,
    students: 150,
    classes: 12,
  },
  {
    title: "Design Systems With React",
    instructor: "Elena Brooks",
    image: "/hero2.jpg",
    rating: 4.5,
    price: 20,
    students: 130,
    classes: 12,
  },
  {
    title: "Create Stunning Banners In Figma",
    instructor: "Aria Kim",
    image: "/design.png",
    rating: 5.0,
    price: 20,
    students: 120,
    classes: 12,
  },
  {
    title: "Digital Marketing Mastery",
    instructor: "Rahul Sharma",
    image: "/course4.webp",
    rating: 4.6,
    price: 25,
    students: 200,
    classes: 15,
  },
  {
    title: "Graphic Design Pro",
    instructor: "Anjali Das",
    image: "/figma.jpg",
    rating: 4.7,
    price: 18,
    students: 180,
    classes: 10,
  },
  {
    title: "Python Programming",
    instructor: "Amit Roy",
    image: "/python.webp",
    rating: 4.8,
    price: 22,
    students: 210,
    classes: 14,
  },
];

export default function CoursesSlider() {
  const [index, setIndex] = useState(0);

  const itemsPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + itemsPerSlide >= courses.length ? 0 : prev + itemsPerSlide
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleCourses = courses.slice(index, index + itemsPerSlide);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          Popular Courses
        </h2>

        <Link href="/course" className="text-blue-600 hover:underline">
          View All Courses →
        </Link>
      </div>

      {/* SLIDER */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-500">

        {visibleCourses.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            
            {/* IMAGE */}
            <div className="relative">
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <span className="absolute bottom-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                BEST SELLER
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h3 className="font-semibold text-lg mb-1">
                {course.title}
              </h3>

              <p className="text-gray-500 text-sm mb-2">
                {course.instructor}
              </p>

              {/* RATING */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-yellow-500">
                  <span className="text-red-500 font-semibold">
                    {course.rating}
                  </span>
                  ⭐⭐⭐⭐⭐
                </div>

                <span className="text-xl font-bold">
                  ${course.price}
                </span>
              </div>

              <hr className="mb-3" />

              {/* INFO */}
              <div className="flex justify-between text-sm text-gray-600">
                <span>📚 {course.classes} Classes</span>
                <span>👨‍🎓 {course.students} Students</span>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(courses.length / itemsPerSlide) }).map(
          (_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i * itemsPerSlide)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === i * itemsPerSlide
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
            ></div>
          )
        )}
      </div>

    </section>
  );
}