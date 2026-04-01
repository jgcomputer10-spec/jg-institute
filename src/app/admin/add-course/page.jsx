"use client";
import { account } from "@/lib/appwrite";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { databases, storage, ID } from "@/lib/appwrite";

// ✅ IDs
const DATABASE_ID = "69ccab6200322c2d3fe5";
const COLLECTION_ID = "course";
const BUCKET_ID = "69cca99900204c41d553";

export default function AdminCourses() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    instructor: "",
    rating: "",
    price: "",
    classes: "",
    students: "",
  });

  const [file, setFile] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
const [editId, setEditId] = useState(null);
const [preview, setPreview] = useState(null);
useEffect(() => {
  const init = async () => {
    try {
      // Check if already logged in
      await account.get();
      console.log("User already logged in");
    } catch {
      console.log("Creating anonymous session...");
      await account.createAnonymousSession(); // 🔥 THIS FIXES EVERYTHING
    }

    fetchCourses();
  };

  init();
}, []);
  // 📦 Fetch Courses
  const fetchCourses = async () => {
    try {
      const res = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID
      );
      setCourses(res.documents);
    } catch (err) {
      console.log("FETCH ERROR:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // ➕ Add Course
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    let imageId = null;

    // Upload new image if selected
    if (file) {
      const upload = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        file
      );
      imageId = upload.$id;
    }

    if (editId) {
      // ✏️ UPDATE COURSE
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        editId,
        {
          ...form,
          ...(imageId && { image: imageId }),
        }
      );

      alert("Course Updated ✅");
    } else {
      // ➕ CREATE COURSE
      if (!imageId) {
        alert("Please upload image");
        setLoading(false);
        return;
      }

      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          ...form,
          image: imageId,
        }
      );

      alert("Course Added ✅");
    }

    // Reset
    setForm({
      title: "",
      instructor: "",
      rating: "",
      price: "",
      classes: "",
      students: "",
    });

    setFile(null);
    setPreview(null);
    setEditId(null);

    fetchCourses();
  } catch (err) {
    console.log(err);
    alert(err.message);
  } finally {
    setLoading(false);
  }
};

  // ❌ Delete Course
  const handleDelete = async (id) => {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );
      fetchCourses();
    } catch (err) {
      console.log("DELETE ERROR:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-4">
      <div className="max-w-7xl mx-auto">

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-6">Add Course</h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

            {Object.keys(form).map((key) => (
              <input
                key={key}
                type="text"
                placeholder={key}
                className="p-3 border rounded-lg"
                value={form[key]}
                onChange={(e) =>
                  setForm({ ...form, [key]: e.target.value })
                }
              />
            ))}

            <input
              type="file"
              accept="image/*"
              className="p-3 border rounded-lg"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg"
            >
              {loading ? "Adding..." : "Add Course"}
            </button>

          </form>
        </div>

        {/* COURSE LIST */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {courses.map((c) => (
            <div key={c.$id} className="bg-white rounded-xl shadow-md">

              <img
                src={`https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${c.image}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`}
                className="h-32 w-full object-cover"
              />

              <div className="p-3">
                <h3 className="text-sm font-semibold">{c.title}</h3>
                <p className="text-xs">{c.instructor}</p>

                <button
                  onClick={() => handleDelete(c.$id)}
                  className="mt-2 w-full bg-red-500 text-white py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}