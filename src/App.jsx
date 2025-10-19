import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserDetails from "./components/UserDetails";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Dashboard</h1>
              <nav className="space-x-4">
                <Link to="/" className="text-sm hover:underline bg-green-500 p-2 rounded-md text-white">
                  Dashboard
                </Link>
              </nav>
            </div>
          </header>

          <main className="max-w-6xl mx-auto p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
          </main>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}