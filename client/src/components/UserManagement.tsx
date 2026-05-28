import { useState, useEffect } from "react";
import { Plus, Edit2, Lock, Trash2, X, Check } from "lucide-react";

interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

interface UserManagementProps {
  token: string;
  currentUserId: string;
}

export default function UserManagement({ token, currentUserId }: UserManagementProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showResetForm, setShowResetForm] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    fullName: "",
    role: "editor",
  });

  const [resetPassword, setResetPassword] = useState("");
  const [editRole, setEditRole] = useState("editor");

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        setError("Failed to fetch users");
      }
    } catch (err) {
      setError("Error fetching users");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email || !formData.username || !formData.password) {
      setError("Email, username, and password are required");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(`User ${formData.email} created successfully`);
        setFormData({ email: "", username: "", password: "", fullName: "", role: "editor" });
        setShowAddForm(false);
        fetchUsers();
      } else {
        setError(data.error || "Failed to create user");
      }
    } catch (err) {
      setError("Error creating user");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (userId: string) => {
    if (!resetPassword || resetPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    setSuccess("");

    try {
      setLoading(true);
      const response = await fetch(`/api/users/${userId}/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newPassword: resetPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(`Password reset for ${data.user.email}`);
        setResetPassword("");
        setShowResetForm(null);
      } else {
        setError(data.error || "Failed to reset password");
      }
    } catch (err) {
      setError("Error resetting password");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateRole = async (userId: string) => {
    setError("");
    setSuccess("");

    try {
      setLoading(true);
      const response = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role: editRole }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(`User role updated to ${editRole}`);
        setEditingUser(null);
        fetchUsers();
      } else {
        setError(data.error || "Failed to update user");
      }
    } catch (err) {
      setError("Error updating user");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeactivateUser = async (userId: string) => {
    if (!window.confirm("Are you sure you want to deactivate this user?")) {
      return;
    }

    setError("");
    setSuccess("");

    try {
      setLoading(true);
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setSuccess("User deactivated successfully");
        fetchUsers();
      } else {
        const data = await response.json();
        setError(data.error || "Failed to deactivate user");
      }
    } catch (err) {
      setError("Error deactivating user");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#1C2B4A]">Team Members</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 bg-[#D4AF6A] text-[#1C2B4A] px-4 py-2 rounded hover:bg-[#C99A5A] transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Member
        </button>
      </div>

      {/* Messages */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
          {success}
        </div>
      )}

      {/* Add User Form */}
      {showAddForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#1C2B4A] mb-4">Add New Team Member</h3>
          <form onSubmit={handleAddUser} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
                  placeholder="user@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
                  placeholder="username"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
                Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
              >
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#D4AF6A] text-[#1C2B4A] font-bold py-2 px-4 rounded hover:bg-[#C99A5A] transition-colors disabled:opacity-50"
              >
                {loading ? "Creating..." : "Create User"}
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Users List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading && users.length === 0 ? (
          <div className="p-6 text-center text-gray-500">Loading users...</div>
        ) : users.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No users found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#1C2B4A]">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#1C2B4A]">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#1C2B4A]">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#1C2B4A]">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#1C2B4A]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className={`border-b border-gray-200 hover:bg-gray-50 ${
                      !user.isActive ? "opacity-60" : ""
                    }`}
                  >
                    <td className="px-6 py-3 text-sm text-[#1C2B4A] font-medium">
                      {user.fullName}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600">{user.email}</td>
                    <td className="px-6 py-3 text-sm">
                      {editingUser === user.id ? (
                        <select
                          value={editRole}
                          onChange={(e) => setEditRole(e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-sm"
                        >
                          <option value="editor">Editor</option>
                          <option value="admin">Admin</option>
                        </select>
                      ) : (
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs font-medium">
                          {user.role}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <span
                        className={`inline-block px-3 py-1 rounded text-xs font-medium ${
                          user.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <div className="flex gap-2">
                        {editingUser === user.id ? (
                          <>
                            <button
                              onClick={() => handleUpdateRole(user.id)}
                              className="text-green-600 hover:text-green-800"
                              title="Save"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setEditingUser(null)}
                              className="text-gray-600 hover:text-gray-800"
                              title="Cancel"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            {user.id !== currentUserId && (
                              <button
                                onClick={() => {
                                  setEditingUser(user.id);
                                  setEditRole(user.role);
                                }}
                                className="text-blue-600 hover:text-blue-800"
                                title="Edit role"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                            )}
                            {user.isActive && (
                              <button
                                onClick={() => {
                                  setShowResetForm(user.id);
                                  setResetPassword("");
                                }}
                                className="text-orange-600 hover:text-orange-800"
                                title="Reset password"
                              >
                                <Lock className="w-4 h-4" />
                              </button>
                            )}
                            {user.id !== currentUserId && (
                              <button
                                onClick={() => handleDeactivateUser(user.id)}
                                className="text-red-600 hover:text-red-800"
                                title="Deactivate"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Reset Password Modal */}
      {showResetForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-[#1C2B4A] mb-4">Reset Password</h3>
            <p className="text-gray-600 mb-4">
              Enter a new password for{" "}
              <strong>{users.find((u) => u.id === showResetForm)?.email}</strong>
            </p>

            <input
              type="password"
              value={resetPassword}
              onChange={(e) => setResetPassword(e.target.value)}
              placeholder="New password (min 6 characters)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A] mb-4"
            />

            <div className="flex gap-2">
              <button
                onClick={() => handleResetPassword(showResetForm)}
                disabled={loading}
                className="flex-1 bg-[#D4AF6A] text-[#1C2B4A] font-bold py-2 px-4 rounded hover:bg-[#C99A5A] transition-colors disabled:opacity-50"
              >
                {loading ? "Resetting..." : "Reset"}
              </button>
              <button
                onClick={() => {
                  setShowResetForm(null);
                  setResetPassword("");
                }}
                className="flex-1 bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
