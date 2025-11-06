"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import { CheckCircle, Trash2 } from "lucide-react";

interface RoomType {
  _id: string;
  type: string;
  price: string;
  period?: string;
  capacity: number;
  popular?: boolean;
}

const RoomTypesTab = () => {
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [period, setPeriod] = useState("/month");
  const [popular, setPopular] = useState(false);

  // Fetch rooms from API
  const fetchRooms = async () => {
    try {
      const res = await axios.get<RoomType[]>(`${import.meta.env.VITE_BACKEND_URL}/api/rooms`);
      setRooms(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // Add new room
  const handleAddRoom = async () => {
    if (!type || !price) return alert("Please fill in all required fields");
    try {
      const res = await axios.post<RoomType>(`${import.meta.env.VITE_BACKEND_URL}/api/rooms`, {
        type,
        price,
        capacity,
        period,
        popular,
      });
      setRooms([...rooms, res.data]);
      setType("");
      setPrice("");
      setCapacity(1);
      setPeriod("/month");
      setPopular(false);
      setShowForm(false); // close popup
    } catch (err) {
      console.error(err);
      alert("Failed to add room");
    }
  };

  // Delete room
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/rooms/${id}`);
      setRooms(rooms.filter((r) => r._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete room");
    }
  };

  return (
    <div className="space-y-6">
      {/* Add Room Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add RoomType
        </button>
      </div>

      {/* Add Room Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4">Add Room Type</h2>
            <input
              type="text"
              placeholder="Room Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border p-2 w-full rounded mb-2"
            />
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 w-full rounded mb-2"
            />
            <input
              type="number"
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="border p-2 w-full rounded mb-2"
            />
            <input
              type="text"
              placeholder="Period (default: /month)"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="border p-2 w-full rounded mb-2"
            />
            <label className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                checked={popular}
                onChange={(e) => setPopular(e.target.checked)}
              />
              <span>Popular</span>
            </label>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAddRoom}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Add Room
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rooms List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <div
            key={room._id}
            className="border rounded-2xl shadow-lg p-4 relative bg-white hover:shadow-2xl transition"
          >
            {room.popular && (
              <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
                Popular
              </div>
            )}
            <h3 className="font-semibold text-lg mb-2">{room.type}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Price: {room.price} <br />
              Capacity: {room.capacity} <br />
              Period: {room.period || "/month"}
            </p>
            <div className="space-y-1 mb-2">
              {["Fully Furnished", "Attached Washroom", "Wi-Fi", "Geyser"].map((f, i) => (
                <div key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleDelete(room._id)}
              className="absolute bottom-2 right-2 text-red-600 hover:text-red-800"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomTypesTab;
