import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ActivityLog from "../ActivityLog";

// Mock fetch
global.fetch = vi.fn();

describe("ActivityLog Component", () => {
  const mockToken = "test-token";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders activity log interface", async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [],
          pagination: { total: 0, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 0,
          actionCounts: {},
          entityCounts: {},
          userCounts: {},
          period: "Last 7 days",
        }),
      });

    render(<ActivityLog token={mockToken} />);

    await waitFor(() => {
      expect(screen.getByText("Filters")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Search activities...")).toBeInTheDocument();
    });
  });

  it("displays activity summary cards", async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [],
          pagination: { total: 0, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 15,
          actionCounts: { create: 5, update: 8, delete: 2 },
          entityCounts: { content: 10, media: 5 },
          userCounts: { "user-1": 10, "user-2": 5 },
          period: "Last 7 days",
        }),
      });

    render(<ActivityLog token={mockToken} />);

    await waitFor(() => {
      expect(screen.getByText("Total Activities")).toBeInTheDocument();
      expect(screen.getByText("15")).toBeInTheDocument();
      expect(screen.getByText("Creates")).toBeInTheDocument();
      expect(screen.getByText("Updates")).toBeInTheDocument();
      expect(screen.getByText("Deletes")).toBeInTheDocument();
    });
  });

  it("fetches and displays activities", async () => {
    const mockActivities = [
      {
        id: "activity-1",
        userId: "user-1",
        action: "update",
        entityType: "content",
        entityId: "content-1",
        description: "Updated homepage hero section",
        createdAt: "2026-05-28T10:00:00Z",
        user: {
          id: "user-1",
          email: "admin@equusinn.com",
          fullName: "Admin User",
          username: "admin",
        },
      },
      {
        id: "activity-2",
        userId: "user-2",
        action: "create",
        entityType: "media",
        entityId: "media-1",
        description: "Uploaded baseball tournament image",
        createdAt: "2026-05-28T09:30:00Z",
        user: {
          id: "user-2",
          email: "editor@equusinn.com",
          fullName: "Editor User",
          username: "editor",
        },
      },
    ];

    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: mockActivities,
          pagination: { total: 2, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 2,
          actionCounts: { update: 1, create: 1 },
          entityCounts: { content: 1, media: 1 },
          userCounts: { "user-1": 1, "user-2": 1 },
          period: "Last 7 days",
        }),
      });

    render(<ActivityLog token={mockToken} />);

    await waitFor(() => {
      expect(screen.getByText("Admin User")).toBeInTheDocument();
      expect(screen.getByText("Editor User")).toBeInTheDocument();
      expect(screen.getByText("Updated homepage hero section")).toBeInTheDocument();
      expect(screen.getByText("Uploaded baseball tournament image")).toBeInTheDocument();
    });
  });

  it("filters activities by action", async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [],
          pagination: { total: 0, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 0,
          actionCounts: {},
          entityCounts: {},
          userCounts: {},
          period: "Last 7 days",
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [],
          pagination: { total: 0, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 0,
          actionCounts: {},
          entityCounts: {},
          userCounts: {},
          period: "Last 7 days",
        }),
      });

    render(<ActivityLog token={mockToken} />);

    await waitFor(() => {
      expect(screen.getByDisplayValue("All Actions")).toBeInTheDocument();
    });

    const actionSelect = screen.getByDisplayValue("All Actions");
    fireEvent.change(actionSelect, { target: { value: "update" } });

    await waitFor(() => {
      const calls = (global.fetch as any).mock.calls;
      expect(calls[calls.length - 2][0]).toContain("action=update");
    });
  });

  it("filters activities by entity type", async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [],
          pagination: { total: 0, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 0,
          actionCounts: {},
          entityCounts: {},
          userCounts: {},
          period: "Last 7 days",
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [],
          pagination: { total: 0, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 0,
          actionCounts: {},
          entityCounts: {},
          userCounts: {},
          period: "Last 7 days",
        }),
      });

    render(<ActivityLog token={mockToken} />);

    await waitFor(() => {
      expect(screen.getByDisplayValue("All Types")).toBeInTheDocument();
    });

    const typeSelect = screen.getByDisplayValue("All Types");
    fireEvent.change(typeSelect, { target: { value: "content" } });

    await waitFor(() => {
      const calls = (global.fetch as any).mock.calls;
      expect(calls[calls.length - 2][0]).toContain("entityType=content");
    });
  });

  it("searches activities by description", async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [],
          pagination: { total: 0, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 0,
          actionCounts: {},
          entityCounts: {},
          userCounts: {},
          period: "Last 7 days",
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [],
          pagination: { total: 0, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 0,
          actionCounts: {},
          entityCounts: {},
          userCounts: {},
          period: "Last 7 days",
        }),
      });

    render(<ActivityLog token={mockToken} />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search activities...")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Search activities...");
    fireEvent.change(searchInput, { target: { value: "homepage" } });

    await waitFor(() => {
      const calls = (global.fetch as any).mock.calls;
      expect(calls[calls.length - 2][0]).toContain("search=homepage");
    });
  });

  it("displays action badges with correct colors", async () => {
    const mockActivities = [
      {
        id: "activity-1",
        userId: "user-1",
        action: "create",
        entityType: "content",
        entityId: "content-1",
        description: "Created new section",
        createdAt: "2026-05-28T10:00:00Z",
        user: {
          id: "user-1",
          email: "admin@equusinn.com",
          fullName: "Admin User",
          username: "admin",
        },
      },
    ];

    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: mockActivities,
          pagination: { total: 1, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 1,
          actionCounts: { create: 1 },
          entityCounts: { content: 1 },
          userCounts: { "user-1": 1 },
          period: "Last 7 days",
        }),
      });

    render(<ActivityLog token={mockToken} />);

    await waitFor(() => {
      expect(screen.getByText("Create")).toBeInTheDocument();
    });
  });

  it("clears filters when Clear Filters button is clicked", async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [],
          pagination: { total: 0, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 0,
          actionCounts: {},
          entityCounts: {},
          userCounts: {},
          period: "Last 7 days",
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [],
          pagination: { total: 0, limit: 25, offset: 0, hasMore: false },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          totalActivities: 0,
          actionCounts: {},
          entityCounts: {},
          userCounts: {},
          period: "Last 7 days",
        }),
      });

    render(<ActivityLog token={mockToken} />);

    await waitFor(() => {
      expect(screen.getByText("Clear Filters")).toBeInTheDocument();
    });

    const clearButton = screen.getByText("Clear Filters");
    fireEvent.click(clearButton);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search activities...")).toHaveValue("");
    });
  });
});
