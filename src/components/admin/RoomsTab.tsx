import { useState, useEffect } from "react";
import axios from "axios";

interface Room {
  _id: string;
  type: "Single" | "Double" | "Triple";
  roomNumber: string;
  isBooked: boolean;
}

const RoomsTab = () => {
  const [activeRoomType, setActiveRoomType] = useState<"Single" | "Double" | "Triple">("Single");
  const [rooms, setRooms] = useState<Room[]>([]);
  const [showAddRoomModal, setShowAddRoomModal] = useState(false);
  const [newRoomType, setNewRoomType] = useState<"Single" | "Double" | "Triple">("Single");
  const [newRoomNumber, setNewRoomNumber] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // default today

  const roomTypes: ("Single" | "Double" | "Triple")[] = ["Single", "Double", "Triple"];

  const fetchRooms = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/rooms/availability?date=${date}`);
      setRooms(res.data.data);
    } catch (err) {
      console.error("Failed to fetch rooms", err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, [date]);

  const handleAddRoom = async () => {
    if (!newRoomNumber) return alert("Enter room number");
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/rooms/add`, {
        type: newRoomType,
        roomNumber: newRoomNumber,
      });
      alert("Room added successfully!");
      setShowAddRoomModal(false);
      setNewRoomNumber("");
      fetchRooms();
    } catch (err) {
      console.error(err);
      alert("Failed to add room");
    }
  };

  const handleDeleteRoom = async (id: string) => {
    if (!confirm("Are you sure you want to delete this room?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/rooms/delete/${id}`);
      fetchRooms();
    } catch (err) {
      console.error(err);
      alert("Failed to delete room");
    }
  };

  const filteredRooms = rooms.filter((r) => r.type === activeRoomType);

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Manage Rooms</h2>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Check Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-1 rounded"
        />
      </div>

      {/* Room Type Tabs */}
      <div className="flex gap-4 mb-4">
        {roomTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded font-medium transition ${
              activeRoomType === type
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveRoomType(type)}
          >
            {type}
          </button>
        ))}

        <button
          className="ml-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={() => setShowAddRoomModal(true)}
        >
          + Add Room
        </button>
      </div>

      {/* Room Cards */}
      <div className="grid grid-cols-3 gap-4">
        {filteredRooms.length === 0 && <p className="text-red-500 col-span-3">No rooms available</p>}
        {filteredRooms.map((room) => (
          <div
            key={room._id}
            className={`p-4 rounded border flex flex-col items-center justify-center ${
              room.isBooked ? "bg-red-100 border-red-400" : "bg-green-100 border-green-400"
            }`}
          >
            <span className="font-semibold">{room.roomNumber}</span>
            <span className="text-sm">{room.isBooked ? "Booked" : "Available"}</span>
            <button
              className="mt-2 text-red-600 text-sm hover:underline"
              onClick={() => handleDeleteRoom(room._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Add Room Modal */}
      {showAddRoomModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded p-6 w-80 relative">
            <h3 className="text-lg font-semibold mb-4">Add New Room</h3>

            <label className="block mb-2">Room Type</label>
            <select
              className="border p-2 w-full rounded mb-4"
              value={newRoomType}
              onChange={(e) => setNewRoomType(e.target.value as any)}
            >
              {roomTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <label className="block mb-2">Room Number</label>
            <input
              type="text"
              className="border p-2 w-full rounded mb-4"
              value={newRoomNumber}
              onChange={(e) => setNewRoomNumber(e.target.value)}
              placeholder="e.g., S-101"
            />

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={() => setShowAddRoomModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
                onClick={handleAddRoom}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomsTab;
