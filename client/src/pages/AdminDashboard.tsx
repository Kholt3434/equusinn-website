import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { LogOut, FileText, Image, Activity, Users } from "lucide-react";
import UserManagement from "../components/UserManagement";
import ActivityLog from "../components/ActivityLog";

interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  role: string;
}

interface ContentSection {
  id: string;
  sectionKey: string;
  title: string;
  content: string;
  imageUrl?: string;
  updatedAt: string;
  updatedBy?: string;
}

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Check for existing token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
      fetchUser(storedToken);
      fetchSections(storedToken);
    }
  }, []);

  const fetchUser = async (authToken: string) => {
    try {
      const response = await fetch("/api/admin/me", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setIsAdmin(userData.role === "admin");
      } else {
        localStorage.removeItem("adminToken");
        setIsLoggedIn(false);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  const fetchSections = async (authToken: string) => {
    try {
      const response = await fetch("/api/content/sections");
      if (response.ok) {
        const data = await response.json();
        setSections(data);
      }
    } catch (err) {
      console.error("Error fetching sections:", err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        setToken(data.token);
        setUser(data.user);
        setIsAdmin(data.user.role === "admin");
        setIsLoggedIn(true);
        setEmail("");
        setPassword("");
        fetchSections(data.token);
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Login error. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    setUser(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
    setEmail("");
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1C2B4A] to-[#2B3F4E] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-[#1C2B4A] mb-2">Equus Inn</h1>
          <p className="text-[#8B5E3C] mb-8">Admin Dashboard</p>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
                placeholder="admin@equusinn.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF6A] text-[#1C2B4A] font-bold py-2 px-4 rounded-lg hover:bg-[#C99A5A] transition-colors disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Secure admin access only
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#1C2B4A]">Equus Inn Admin</h1>
            <p className="text-sm text-gray-600">Welcome, {user?.fullName}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab("content")}
            className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === "content"
                ? "text-[#D4AF6A] border-b-2 border-[#D4AF6A]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <FileText className="w-4 h-4" />
            Content
          </button>
          <button
            onClick={() => setActiveTab("media")}
            className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === "media"
                ? "text-[#D4AF6A] border-b-2 border-[#D4AF6A]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Image className="w-4 h-4" />
            Media
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === "activity"
                ? "text-[#D4AF6A] border-b-2 border-[#D4AF6A]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Activity className="w-4 h-4" />
            Activity
          </button>
          {isAdmin && (
            <button
              onClick={() => setActiveTab("users")}
              className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === "users"
                  ? "text-[#D4AF6A] border-b-2 border-[#D4AF6A]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Users className="w-4 h-4" />
              Team
            </button>
          )}
        </div>

        {/* Content Tab */}
        {activeTab === "content" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-[#1C2B4A] mb-4">
                Content Sections
              </h2>
              <p className="text-gray-600 mb-6">
                Edit website content and copy. Changes are live immediately.
              </p>

              <div className="space-y-4">
                {sections.length === 0 ? (
                  <p className="text-gray-500">No content sections yet.</p>
                ) : (
                  sections.map((section) => (
                    <div
                      key={section.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-[#1C2B4A]">
                            {section.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {section.sectionKey}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            Last updated:{" "}
                            {new Date(section.updatedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <button className="bg-[#D4AF6A] text-[#1C2B4A] px-4 py-2 rounded hover:bg-[#C99A5A] transition-colors">
                          Edit
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Media Tab */}
        {activeTab === "media" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-[#1C2B4A] mb-4">
                Media Library
              </h2>
              <p className="text-gray-600 mb-6">
                Upload and manage images for your website.
              </p>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Image className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-2">
                  Drag and drop images here, or click to select
                </p>
                <button className="bg-[#D4AF6A] text-[#1C2B4A] px-6 py-2 rounded hover:bg-[#C99A5A] transition-colors">
                  Select Files
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === "activity" && (
          <ActivityLog token={token} />
        )}

        {/* Users Tab (Admin Only) */}
        {activeTab === "users" && isAdmin && (
          <div className="bg-white rounded-lg shadow p-6">
            <UserManagement token={token} currentUserId={user?.id || ""} />
          </div>
        )}
      </main>
    </div>
  );
}
