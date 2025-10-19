import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "./userCard";
import { useUsers } from "../context/userContext";
import { BeatLoader } from "react-spinners";

const API_BASE = "https://jsonplaceholder.typicode.com";

export default function Dashboard() {
  const { users, setUsers, lastVisited } = useUsers();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  useEffect(() => {
    if (users.length === 0) fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/users`);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  }

  const companies = [...new Set(users.map((u) => u.company?.name).filter(Boolean))];

  const filtered = users.filter((u) => {
    const matchQuery = [u.name, u.email].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchCompany = companyFilter ? u.company?.name === companyFilter : true;
    return matchQuery && matchCompany;
  });

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Search by name or email..."
  className="w-full md:w-96 px-4 py-2 border-2 border-green-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 hover:border-green-500"
/>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
            className="px-4 py-2 border-2 border-green-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 hover:border-green-500"
          >
            <option value="">All Companies</option>
            {companies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button onClick={fetchUsers} className="px-3 py-2 border rounded bg-white hover:bg-gray-50">
            Refresh
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10"><BeatLoader /></div>
      ) : error ? (
        <div className="text-red-600">Error: {error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      {lastVisited && (
        <div className="mt-6 p-4 bg-white rounded shadow-sm">
          <strong>Last visited user:</strong> {lastVisited.name} ({lastVisited.email}) —
          <Link to={`/user/${lastVisited.id}`} className="ml-2 text-blue-600 hover:underline">
            View
          </Link>
        </div>
      )}
    </div>
  );
}
