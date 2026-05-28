import { useState, useEffect } from "react";
import { Search, Filter, Download, Calendar } from "lucide-react";

interface ActivityRecord {
  id: string;
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  description: string;
  createdAt: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    username: string;
  };
}

interface ActivityLogProps {
  token: string;
}

export default function ActivityLog({ token }: ActivityLogProps) {
  const [activities, setActivities] = useState<ActivityRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState<any>(null);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [actionFilter, setActionFilter] = useState("");
  const [entityTypeFilter, setEntityTypeFilter] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [limit] = useState(25);

  // Fetch activities
  useEffect(() => {
    fetchActivities();
    fetchSummary();
  }, [searchQuery, actionFilter, entityTypeFilter, userFilter, dateRange, currentPage]);

  const fetchActivities = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        limit: limit.toString(),
        offset: (currentPage * limit).toString(),
      });

      if (searchQuery) params.append("search", searchQuery);
      if (actionFilter) params.append("action", actionFilter);
      if (entityTypeFilter) params.append("entityType", entityTypeFilter);
      if (userFilter) params.append("userId", userFilter);
      if (dateRange.start) params.append("startDate", dateRange.start);
      if (dateRange.end) params.append("endDate", dateRange.end);

      const response = await fetch(`/api/activity?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setActivities(data.data);
      } else {
        setError("Failed to fetch activity log");
      }
    } catch (err) {
      setError("Error fetching activity log");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSummary = async () => {
    try {
      const response = await fetch("/api/activity/summary?days=7", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSummary(data);
      }
    } catch (err) {
      console.error("Error fetching summary:", err);
    }
  };

  const handleExport = () => {
    const csv = [
      ["Date", "User", "Action", "Entity Type", "Description"],
      ...activities.map((a) => [
        new Date(a.createdAt).toLocaleString(),
        a.user?.fullName || "Unknown",
        a.action,
        a.entityType,
        a.description,
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `activity-log-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const getActionBadgeColor = (action: string) => {
    switch (action) {
      case "create":
        return "bg-green-100 text-green-800";
      case "update":
        return "bg-blue-100 text-blue-800";
      case "delete":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Total Activities</p>
            <p className="text-2xl font-bold text-[#1C2B4A]">
              {summary.totalActivities}
            </p>
            <p className="text-xs text-gray-500 mt-1">{summary.period}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Creates</p>
            <p className="text-2xl font-bold text-green-600">
              {summary.actionCounts?.create || 0}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Updates</p>
            <p className="text-2xl font-bold text-blue-600">
              {summary.actionCounts?.update || 0}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Deletes</p>
            <p className="text-2xl font-bold text-red-600">
              {summary.actionCounts?.delete || 0}
            </p>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-[#1C2B4A]" />
          <h3 className="text-lg font-bold text-[#1C2B4A]">Filters</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
              Search Description
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(0);
                }}
                placeholder="Search activities..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
              />
            </div>
          </div>

          {/* Action Filter */}
          <div>
            <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
              Action
            </label>
            <select
              value={actionFilter}
              onChange={(e) => {
                setActionFilter(e.target.value);
                setCurrentPage(0);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
            >
              <option value="">All Actions</option>
              <option value="create">Create</option>
              <option value="update">Update</option>
              <option value="delete">Delete</option>
              <option value="login">Login</option>
            </select>
          </div>

          {/* Entity Type Filter */}
          <div>
            <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
              Entity Type
            </label>
            <select
              value={entityTypeFilter}
              onChange={(e) => {
                setEntityTypeFilter(e.target.value);
                setCurrentPage(0);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
            >
              <option value="">All Types</option>
              <option value="content">Content</option>
              <option value="media">Media</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-[#1C2B4A] mb-1">
              Start Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => {
                  setDateRange({ ...dateRange, start: e.target.value });
                  setCurrentPage(0);
                }}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => {
              setSearchQuery("");
              setActionFilter("");
              setEntityTypeFilter("");
              setUserFilter("");
              setDateRange({ start: "", end: "" });
              setCurrentPage(0);
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm font-medium"
          >
            Clear Filters
          </button>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-[#D4AF6A] text-[#1C2B4A] rounded hover:bg-[#C99A5A] transition-colors text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Activity Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 m-4 rounded">
            {error}
          </div>
        )}

        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading activities...</div>
        ) : activities.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No activities found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#1C2B4A]">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#1C2B4A]">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#1C2B4A]">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#1C2B4A]">
                    Entity
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#1C2B4A]">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr
                    key={activity.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">
                      {new Date(activity.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <div>
                        <p className="font-medium text-[#1C2B4A]">
                          {activity.user?.fullName || "Unknown"}
                        </p>
                        <p className="text-xs text-gray-500">
                          {activity.user?.email}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <span
                        className={`inline-block px-3 py-1 rounded text-xs font-medium ${getActionBadgeColor(
                          activity.action
                        )}`}
                      >
                        {activity.action.charAt(0).toUpperCase() +
                          activity.action.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600">
                      <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                        {activity.entityType}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700">
                      {activity.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {activities.length > 0 && (
          <div className="bg-gray-50 border-t border-gray-200 px-6 py-3 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {currentPage * limit + 1} to{" "}
              {Math.min((currentPage + 1) * limit, activities.length)} of{" "}
              {activities.length}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 text-sm"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={activities.length < limit}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 text-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
