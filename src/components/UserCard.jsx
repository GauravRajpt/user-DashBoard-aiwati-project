import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <h3 className="text-lg font-medium">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-600">{user.company?.name}</p>
      <div className="mt-4 flex items-center justify-between">
        <Link
          to={`/user/${user.id}`}
          className="px-3 py-1 rounded bg-green-600 text-white text-sm hover:bg-green-900"
        >
          View Details
        </Link>
        <span className="text-xs text-gray-500">ID: {user.id}</span>
      </div>
    </div>
  );
}