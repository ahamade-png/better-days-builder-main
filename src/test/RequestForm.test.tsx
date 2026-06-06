import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RequestForm from "@/components/RequestForm";

// Mock supabase
vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    functions: {
      invoke: vi.fn(),
    },
  },
}));

import { supabase } from "@/integrations/supabase/client";

const renderForm = () =>
  render(
    <BrowserRouter>
      <RequestForm />
    </BrowserRouter>
  );

describe("RequestForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders form fields", () => {
    renderForm();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/what can we help/i)).toBeInTheDocument();
  });

  it("shows submit button", () => {
    renderForm();
    expect(screen.getByRole("button", { name: /submit request/i })).toBeInTheDocument();
  });

  it("validates empty name on submit", async () => {
    renderForm();
    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));
    await waitFor(() => {
      expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument();
    });
  });

  it("validates invalid email", async () => {
    renderForm();
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "notanemail" } });
    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));
    await waitFor(() => {
      expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    });
  });

  it("validates short phone number", async () => {
    renderForm();
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: "123" } });
    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));
    await waitFor(() => {
      expect(screen.getByText(/valid phone/i)).toBeInTheDocument();
    });
  });

  it("submits successfully via edge function", async () => {
    (supabase.functions.invoke as ReturnType<typeof vi.fn>).mockResolvedValue({ error: null });

    renderForm();
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jane Smith" } });
    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));

    await waitFor(() => {
      expect(screen.getByText(/request has been received/i)).toBeInTheDocument();
    });

    expect(supabase.functions.invoke).toHaveBeenCalledWith("submit-lead", expect.any(Object));
  });

  it("falls back to GHL on edge function failure", async () => {
    (supabase.functions.invoke as ReturnType<typeof vi.fn>).mockResolvedValue({
      error: { message: "function error" },
    });

    global.fetch = vi.fn().mockResolvedValue({ ok: true });

    renderForm();
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jane Smith" } });
    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));

    await waitFor(() => {
      expect(screen.getByText(/request has been received/i)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalled();
  });

  it("shows error on complete failure", async () => {
    (supabase.functions.invoke as ReturnType<typeof vi.fn>).mockResolvedValue({
      error: { message: "fail" },
    });

    global.fetch = vi.fn().mockResolvedValue({ ok: false, text: () => Promise.resolve("error") });

    renderForm();
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jane Smith" } });
    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  it("disables button while submitting", async () => {
    let resolvePromise: (value: unknown) => void;
    (supabase.functions.invoke as ReturnType<typeof vi.fn>).mockReturnValue(
      new Promise((resolve) => { resolvePromise = resolve; })
    );

    renderForm();
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Test" } });
    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));

    await waitFor(() => {
      const btn = screen.getByRole("button", { name: /submitting/i });
      expect(btn).toBeDisabled();
    });

    resolvePromise!({ error: null });

    await waitFor(() => {
      expect(screen.getByText(/request has been received/i)).toBeInTheDocument();
    });
  });

  it("renders privacy and terms links", () => {
    renderForm();
    expect(screen.getByText(/privacy policy/i)).toHaveAttribute("href", "/privacy");
    expect(screen.getByText(/terms of service/i)).toHaveAttribute("href", "/terms");
  });

  it("renders phone call link", () => {
    renderForm();
    const callLinks = screen.getAllByText(/313-442-7350/i);
    expect(callLinks.length).toBeGreaterThan(0);
  });

  it("clears form after successful submission", async () => {
    (supabase.functions.invoke as ReturnType<typeof vi.fn>).mockResolvedValue({ error: null });

    renderForm();
    const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: "Clear Test" } });
    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));

    await waitFor(() => {
      expect(nameInput.value).toBe("");
    });
  });
});
