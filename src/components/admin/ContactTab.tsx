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
        const res = await axios.get("https://zanu-sunidhi-coliving-4.onrender.com/api/contact");
        setContacts(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch contacts");
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="overflow-x-auto border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id} className="text-center">
              <td className="border px-4 py-2">{c.name}</td>
              <td className="border px-4 py-2">{c.email}</td>
              <td className="border px-4 py-2">{c.phone || "-"}</td>
              <td className="border px-4 py-2">{c.message || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTab;
