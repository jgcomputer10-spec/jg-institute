"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { databases } from "@/lib/appwrite";

const DATABASE_ID = "69ccab6200322c2d3fe5";
const COLLECTION_ID = "course";
const BUCKET_ID = "69cca99900204c41d553";
const PROJECT_ID = "69cca865002c203fe498";

export default function CoursesSlider() {
  const [courses, setCourses] = useState([]);
  const [index, setIndex] = useState(0);

  // ✅ MODAL STATE (ADDED)
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const itemsPerSlide = 3;

  // FETCH CMS COURSES
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID
        );

        setCourses(res.documents.slice(0, 6));
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourses();
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + itemsPerSlide >= courses.length ? 0 : prev + itemsPerSlide
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [courses]);

  const visibleCourses = courses.slice(index, index + itemsPerSlide);

  // ✅ CLICK HANDLER
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          Popular Courses
        </h2>

        <Link
          href="/component/course"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
        >
          View All Courses →
        </Link>
      </div>

      {/* SLIDER */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {visibleCourses.map((course) => (
          <div
            key={course.$id}
            onClick={() => handleCourseClick(course)} // ✅ CLICK ENABLED
            className="bg-white cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >

            {/* IMAGE */}
            <div className="relative">
              <Image
                src={`https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${course.image}/view?project=${PROJECT_ID}`}
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

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-yellow-500">
                  <span className="text-red-500 font-semibold">
                    {course.rating}
                  </span>
                  ★★★★★
                </div>

                <span className="text-xl font-bold">
                  ₹ {course.price}
                </span>
              </div>

              <hr className="mb-3" />

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

      {/* ✅ MODAL */}
      {showModal && selectedCourse && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative overflow-y-auto max-h-[90vh]">

            {/* CLOSE */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✖
            </button>

            {/* IMAGE */}
            <div className="w-full h-52 relative mb-4">
              <Image
                src={`https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${selectedCourse.image}/view?project=${PROJECT_ID}`}
                alt={selectedCourse.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-xl font-bold mb-2">
              {selectedCourse.title}
            </h2>

            <p className="text-gray-500 mb-4">
              Instructor: {selectedCourse.instructor}
            </p>

            <p className="text-gray-600 mb-6">
              Interested in this course? Get more details now.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4">

              <div className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center">
                For More Enquire click below
              </div>

              <a
                href={`https://wa.me/917002416852?text=Hi, I'm interested in ${selectedCourse.title}`}
                target="_blank"
                className="w-full text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Contact on WhatsApp
              </a>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}