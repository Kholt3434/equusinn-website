import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UserManagement from "../UserManagement";

// Mock fetch
global.fetch = vi.fn();

describe("UserManagement Component", () => {
  const mockToken = "test-token";
  const mockCurrentUserId = "user-123";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders user management interface", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<UserManagement token={mockToken} currentUserId={mockCurrentUserId} />);

    expect(screen.getByText("Team Members")).toBeInTheDocument();
    expect(screen.getByText("Add Member")).toBeInTheDocument();
  });

  it("fetches and displays users on mount", async () => {
    const mockUsers = [
      {
        id: "user-1",
        email: "admin@equusinn.com",
        username: "admin",
        fullName: "Admin User",
        role: "admin",
        isActive: true,
        createdAt: "2026-05-28T00:00:00Z",
      },
      {
        id: "user-2",
        email: "editor@equusinn.com",
        username: "editor",
        fullName: "Editor User",
        role: "editor",
        isActive: true,
        createdAt: "2026-05-28T00:00:00Z",
      },
    ];

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    render(<UserManagement token={mockToken} currentUserId={mockCurrentUserId} />);

    await waitFor(() => {
      expect(screen.getByText("Admin User")).toBeInTheDocument();
      expect(screen.getByText("Editor User")).toBeInTheDocument();
    });
  });

  it("shows add user form when Add Member button is clicked", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<UserManagement token={mockToken} currentUserId={mockCurrentUserId} />);

    const addButton = screen.getByText("Add Member");
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText("Add New Team Member")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("user@example.com")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
    });
  });

  it("creates new user with form submission", async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [],
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          user: {
            id: "new-user",
            email: "newuser@equusinn.com",
            username: "newuser",
            fullName: "New User",
            role: "editor",
            isActive: true,
          },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          {
            id: "new-user",
            email: "newuser@equusinn.com",
            username: "newuser",
            fullName: "New User",
            role: "editor",
            isActive: true,
            createdAt: "2026-05-28T00:00:00Z",
          },
        ],
      });

    render(<UserManagement token={mockToken} currentUserId={mockCurrentUserId} />);

    // Open form
    const addButton = screen.getByText("Add Member");
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText("Add New Team Member")).toBeInTheDocument();
    });

    // Fill form
    const emailInput = screen.getByPlaceholderText("user@example.com");
    const usernameInput = screen.getByPlaceholderText("username");
    const passwordInput = screen.getByPlaceholderText("••••••••");

    fireEvent.change(emailInput, { target: { value: "newuser@equusinn.com" } });
    fireEvent.change(usernameInput, { target: { value: "newuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Submit form
    const createButton = screen.getByText("Create User");
    fireEvent.click(createButton);

    await waitFor(() => {
      expect(screen.getByText(/User newuser@equusinn.com created successfully/)).toBeInTheDocument();
    });
  });

  it("displays error when user creation fails", async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [],
      })
      .mockResolvedValueOnce({
        ok: false,
        json: async () => ({
          error: "User already exists",
        }),
      });

    render(<UserManagement token={mockToken} currentUserId={mockCurrentUserId} />);

    // Open form
    const addButton = screen.getByText("Add Member");
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText("Add New Team Member")).toBeInTheDocument();
    });

    // Fill form
    const emailInput = screen.getByPlaceholderText("user@example.com");
    const usernameInput = screen.getByPlaceholderText("username");
    const passwordInput = screen.getByPlaceholderText("••••••••");

    fireEvent.change(emailInput, { target: { value: "existing@equusinn.com" } });
    fireEvent.change(usernameInput, { target: { value: "existing" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Submit form
    const createButton = screen.getByText("Create User");
    fireEvent.click(createButton);

    await waitFor(() => {
      expect(screen.getByText("User already exists")).toBeInTheDocument();
    });
  });

  it("displays user status correctly", async () => {
    const mockUsers = [
      {
        id: "user-1",
        email: "active@equusinn.com",
        username: "active",
        fullName: "Active User",
        role: "editor",
        isActive: true,
        createdAt: "2026-05-28T00:00:00Z",
      },
      {
        id: "user-2",
        email: "inactive@equusinn.com",
        username: "inactive",
        fullName: "Inactive User",
        role: "editor",
        isActive: false,
        createdAt: "2026-05-28T00:00:00Z",
      },
    ];

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    render(<UserManagement token={mockToken} currentUserId={mockCurrentUserId} />);

    await waitFor(() => {
      const statusBadges = screen.getAllByText(/Active|Inactive/);
      expect(statusBadges.length).toBeGreaterThan(0);
    });
  });

  it("prevents self-deactivation", async () => {
    const mockUsers = [
      {
        id: mockCurrentUserId,
        email: "admin@equusinn.com",
        username: "admin",
        fullName: "Current Admin",
        role: "admin",
        isActive: true,
        createdAt: "2026-05-28T00:00:00Z",
      },
    ];

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    render(<UserManagement token={mockToken} currentUserId={mockCurrentUserId} />);

    await waitFor(() => {
      expect(screen.getByText("Current Admin")).toBeInTheDocument();
    });

    // Delete button should not be present for current user
    const deleteButtons = screen.queryAllByTitle("Deactivate");
    expect(deleteButtons.length).toBe(0);
  });
});
