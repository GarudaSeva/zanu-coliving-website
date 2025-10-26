import { useState } from "react";
import RoomsTab from "@/components/admin/RoomsTab";
import ContactTab from "@/components/admin/ContactTab";
import RoomTypesTab from "@/components/admin/RoomTypesTab";
import GalleryTab from "@/components/admin/GalleryTab"; // ✅ import new GalleryTab

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<"Add Property" | "Add Rooms" | "View Contacts" | "Add RoomTypes">("Add Property");

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center animate-fade-in">
        Welcome to Admin Dashboard !!!
      </h1>

      {/* Tabs */}
    {/* Tabs */}
<div className="flex flex-wrap justify-center gap-4 mb-8">
  {["Add Property", "Add Rooms", "View Contacts", "Add RoomTypes"].map((tab) => (
    <button
      key={tab}
      className={`w-full sm:w-[calc(50%-0.5rem)] md:w-auto px-6 py-2 rounded-lg font-medium transition-transform duration-200
        ${activeTab === tab ? "bg-blue-600 text-white scale-105" : "bg-gray-200 text-gray-800 hover:scale-105"}
      `}
      onClick={() => setActiveTab(tab as any)}
    >
      {tab}
    </button>
  ))}
</div>


      {/* Tab Content */}
      <div>
        {activeTab === "Add Property" && <GalleryTab />}
        {activeTab === "Add Rooms" && <RoomsTab />}
        {activeTab === "View Contacts" && <ContactTab />}
        {activeTab === "Add RoomTypes" && <RoomTypesTab />}
      </div>
    </div>
  );
};

export default AdminDashboard;
