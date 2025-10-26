import { useState } from "react";
import axios from "axios";
import RoomsTab from "@/components/admin/RoomsTab";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<"Gallery" | "Facilities" | "Rooms">("Gallery");

  // Gallery state
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState("Bedroom");
  const [alt, setAlt] = useState("");
  const [preview, setPreview] = useState("");
  const categories = ["Bedroom", "Dining", "Common Area"];


  // ---------- Handlers ----------
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("category", category);
    formData.append("alt", alt);

    try {
      await axios.post("http://localhost:5000/api/gallery/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Uploaded successfully!");
      setCategory("Bedroom");
      setAlt("");
      setFile(null);
      setPreview("");
    } catch (err) {
      alert("❌ Upload failed");
      console.error(err);
    }
  };

  
  // ---------- Render ----------
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold mb-6 text-center animate-fade-in">
        Welcome to Admin Dashboard
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {["Gallery", "Rooms"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg font-medium transition-transform duration-200
              ${activeTab === tab ? "bg-blue-600 text-white scale-105" : "bg-gray-200 text-gray-800 hover:scale-105"}
            `}
            onClick={() => setActiveTab(tab as any)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ---------- Tab Content ---------- */}
      <div>
        {/* Gallery Section */}
        {activeTab === "Gallery" && (
          <form onSubmit={handleGallerySubmit} className="space-y-4 border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Upload Gallery Image</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} required />
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
        )}

        {/* Rooms Section */}
        
{activeTab === "Rooms" && <RoomsTab />}
      </div>
    </div>
  );
};

export default AdminDashboard;
