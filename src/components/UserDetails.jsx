import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import { BeatLoader } from "react-spinners";

const API_BASE = "https://jsonplaceholder.typicode.com";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setLastVisited } = useUsers();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [id]);

  async function fetchUser() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/users/${id}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUser(data);
      setLastVisited(data);
    } catch (err) {
      setError(err.message || "Failed to fetch user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <button onClick={() => navigate(-1)} className="px-3 py-1 rounded border bg-green-600 text-white cursor-pointer">
          &larr; Back to Dashboard
        </button>
      </div>

      {loading ? (
        <div className="text-center py-10"><BeatLoader/></div>
      ) : error ? (
        <div className="text-red-600">Error: {error}</div>
      ) : user ? (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
          <p className="text-sm text-gray-600 mb-2">{user.email} • {user.phone}</p>
          <p className="text-sm text-gray-600 mb-4">Website: {user.website}</p>

          <section className="mb-4">
            <h3 className="font-medium">Address</h3>
            <p className="text-sm text-gray-700">
              {user.address?.suite}, {user.address?.street}, {user.address?.city} - {user.address?.zipcode}
            </p>
          </section>

          <section>
            <h3 className="font-medium">Company</h3>
            <p className="text-sm text-gray-700">{user.company?.name}</p>
            <p className="text-sm text-gray-600">{user.company?.catchPhrase}</p>
          </section>
        </div>
      ) : (
        <div>No user data.</div>
      )}
    </div>
  );
}
