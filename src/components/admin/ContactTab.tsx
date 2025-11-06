"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

const ContactTab = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/contact`
        );
        setContacts(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch contacts");
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="overflow-x-auto border p-4 rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Details</h2>
      <table className="min-w-full border-collapse rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-blue-200 to-blue-300 text-gray-800">
            <th className="px-6 py-3 text-left font-semibold">Name</th>
            <th className="px-6 py-3 text-left font-semibold">Email</th>
            <th className="px-6 py-3 text-left font-semibold">Phone</th>
            <th className="px-6 py-3 text-left font-semibold">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, idx) => (
            <tr
              key={c._id}
              className={`${
                idx % 2 === 0
                  ? "bg-white/70 hover:bg-white/90"
                  : "bg-gray-100/70 hover:bg-gray-200/90"
              } transition-colors`}
            >
              <td className="px-6 py-3 border-b">{c.name}</td>
              <td className="px-6 py-3 border-b">{c.email}</td>
              <td className="px-6 py-3 border-b">{c.phone || "-"}</td>
              <td className="px-6 py-3 border-b">{c.message || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTab;
