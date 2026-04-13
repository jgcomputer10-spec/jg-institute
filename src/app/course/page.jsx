"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { databases } from "@/lib/appwrite";

const DATABASE_ID = "69ccab6200322c2d3fe5";
const COLLECTION_ID = "course";
const BUCKET_ID = "69cca99900204c41d553";
const PROJECT_ID = "69cca865002c203fe498";

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ NEW STATES (ADDED)
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ✅ FETCH COURSES
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID
        );
        setCourses(res.documents);
      } catch (err) {
        console.log("FETCH ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // ✅ HANDLE CLICK (ADDED)
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  return (
    <section className="pt-28 pb-16 px-4 max-w-7xl mx-auto">

      {/* HEADING */}
      <h1 className="text-3xl md:text-4xl font-bold mb-12">
        Popular Courses
      </h1>

      {/* LOADING */}
      {loading ? (
        <p className="text-center text-gray-500">Loading courses...</p>
      ) : courses.length === 0 ? (
        <p className="text-center text-gray-500">No courses found</p>
      ) : (

        /* GRID */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {courses.map((course) => (
            <div
              key={course.$id}
              onClick={() => handleCourseClick(course)} // ✅ ADDED
              className="bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative w-full h-52">
             <Image
  src={`https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${course.image}/view?project=${PROJECT_ID}`}
  alt={course.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>

                <span className="absolute bottom-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  BEST SELLER
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-1 leading-snug">
                  {course.title}
                </h3>

                {/* INSTRUCTOR */}
                <p className="text-gray-500 text-sm mb-3">
                  {course.instructor}
                </p>

                {/* RATING + PRICE */}
                <div className="flex justify-between items-center mb-3">

                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-semibold">
                      {course.rating}
                    </span>

                    <div className="text-yellow-400 text-sm">
                      ★ ★ ★ ★ ★
                    </div>
                  </div>

                  <span className="text-lg font-bold text-gray-900">
                    ₹ {course.price}
                  </span>

                </div>

                <hr className="mb-3 border-gray-200" />

                {/* FOOTER */}
                <div className="flex justify-between text-sm text-gray-600">

                  <span className="flex items-center gap-1">
                    📚 {course.classes} Classes
                  </span>

                  <span className="flex items-center gap-1">
                    👨‍🎓 {course.students} Students
                  </span>

                </div>

              </div>
            </div>
          ))}

        </div>
      )}

      {/* ✅ MODAL (ADDED) */}
      {showModal && selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative">

            {/* CLOSE */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✖
            </button>

            {/* TITLE */}
            <h2 className="text-xl font-bold mb-2">
              {selectedCourse.title}
            </h2>

            <p className="text-gray-500 mb-6">
              Interested in this course? Get more details now.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4">

              {/* ENQUIRE */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Enquire Now
              </button>

              {/* WHATSAPP */}
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