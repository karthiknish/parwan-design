"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    typeof window !== "undefined" &&
      localStorage.getItem("adminLoggedIn") === "true"
  );
  const [error, setError] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [entryLoading, setEntryLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  async function fetchSubmissions() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin-submissions");
      const data = await res.json();
      if (res.ok) {
        setSubmissions(data.items);
      } else {
        setError(data.error || "Failed to fetch submissions.");
      }
    } catch (err) {
      setError("Failed to fetch submissions.");
    } finally {
      setLoading(false);
      setHasFetched(true);
    }
  }

  async function fetchEntry(id) {
    setEntryLoading(true);
    setSelectedEntry(null);
    try {
      const res = await fetch(`/api/admin-submissions/${id}`);
      const data = await res.json();
      if (res.ok) {
        setSelectedEntry(data.item);
      } else {
        setError(data.error || "Failed to fetch entry.");
      }
    } catch (err) {
      setError("Failed to fetch entry.");
    } finally {
      setEntryLoading(false);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setError(null);
    if (username === "admin" && password === "Admin1!") {
      setLoggedIn(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("adminLoggedIn", "true");
      }
      fetchSubmissions();
    } else {
      setError("Invalid username or password.");
    }
  }

  function handleLogout() {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setSubmissions([]);
    setSelectedEntry(null);
    setHasFetched(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("adminLoggedIn");
    }
  }

  // If already logged in (from localStorage), fetch submissions on first render after login
  if (loggedIn && !hasFetched && typeof window !== "undefined") {
    fetchSubmissions();
  }

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-background text-foreground pt-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl bg-card rounded-lg shadow p-8"
      >
        {!loggedIn ? (
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <h1 className="text-3xl font-bold mb-2 text-center text-primary">
              Admin Login
            </h1>
            <Input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="mt-2">
              Login
            </Button>
            {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
          </form>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">
              Contact Submissions
            </h1>
            <Button onClick={handleLogout} className="mb-4">
              Logout
            </Button>
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 border">Name</th>
                      <th className="p-2 border">Email</th>
                      <th className="p-2 border">Phone</th>
                      <th className="p-2 border">Message</th>
                      <th className="p-2 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-4 text-center">
                          No submissions found.
                        </td>
                      </tr>
                    ) : (
                      submissions.map((item, i) => (
                        <tr key={item.sys.id || i}>
                          <td className="p-2 border">
                            {item.fields.name?.["en-US"]}
                          </td>
                          <td className="p-2 border">
                            {item.fields.email?.["en-US"]}
                          </td>
                          <td className="p-2 border">
                            {item.fields.phone?.["en-US"]}
                          </td>
                          <td className="p-2 border">
                            {item.fields.message?.["en-US"]}
                          </td>
                          <td className="p-2 border text-center">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => fetchEntry(item.sys.id)}
                            >
                              View
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
            {/* Entry Details Modal/Section */}
            {selectedEntry && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white dark:bg-card rounded-lg shadow-lg p-8 max-w-lg w-full relative">
                  <button
                    className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-primary"
                    onClick={() => setSelectedEntry(null)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    Submission Details
                  </h2>
                  {entryLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold">Name:</span>{" "}
                        {selectedEntry.fields.name?.["en-US"]}
                      </div>
                      <div>
                        <span className="font-semibold">Email:</span>{" "}
                        {selectedEntry.fields.email?.["en-US"]}
                      </div>
                      <div>
                        <span className="font-semibold">Phone:</span>{" "}
                        {selectedEntry.fields.phone?.["en-US"]}
                      </div>
                      <div>
                        <span className="font-semibold">Message:</span>{" "}
                        {selectedEntry.fields.message?.["en-US"]}
                      </div>
                      <div>
                        <span className="font-semibold">Created At:</span>{" "}
                        {selectedEntry.sys.createdAt}
                      </div>
                      <div>
                        <span className="font-semibold">Entry ID:</span>{" "}
                        {selectedEntry.sys.id}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
