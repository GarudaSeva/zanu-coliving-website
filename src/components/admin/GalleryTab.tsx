"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

interface GalleryItem {
  _id: string;
  category: string;
  alt: string;
  imageUrl: string;
  createdAt: string;
}

const GalleryTab = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [category, setCategory] = useState("Bedroom");
  const [alt, setAlt] = useState("");
  const [showModal, setShowModal] = useState(false);

  const categories = ["Bedroom", "Dining", "Common Area"];

  const fetchGallery = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/gallery`
    );
    setGallery(Array.isArray(res.data) ? res.data : []);
  } catch (err) {
    console.error(err);
    setGallery([]);
    alert("Failed to fetch gallery items");
  } finally {
    setLoading(false); // stop loading regardless of success/failure
  }
};



  useEffect(() => {
    fetchGallery();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("category", category);
    formData.append("alt", alt);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/gallery/upload`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setGallery([res.data.data, ...gallery]); // prepend new image
      setFile(null);
      setPreview("");
      setCategory("Bedroom");
      setAlt("");
      setShowModal(false);
    } catch (err) {
      console.error("Upload error:", err);
      alert("❌ Upload failed");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/gallery/${id}`);
      setGallery(gallery.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete image");
    }
  };

  if (loading) {
    return <p className="text-center py-20">Loading gallery...</p>;
  }

  if (!gallery.length) {
    return <p className="text-center py-20">No images found in the gallery.</p>;
  }

  return (
    <div className="space-y-6">
      {/* Add Image Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Add Gallery Image
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border p-2 w-full rounded"
                required
              />
              {preview && (
                <img src={preview} alt="preview" className="w-40 h-40 object-cover rounded" />
              )}
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 w-full rounded"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Alt text"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                className="border p-2 w-full rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Gallery Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gallery.map(
          (item) =>
            item.imageUrl && (
              <div key={item._id} className="border rounded-xl shadow-md overflow-hidden relative">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}${item.imageUrl}`}
                  alt={item.alt || item.category}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.category}</h3>
                  <p className="text-sm text-gray-600">{item.alt || "No description"}</p>
                </div>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 bg-white/70 p-1 rounded-full"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default GalleryTab;
