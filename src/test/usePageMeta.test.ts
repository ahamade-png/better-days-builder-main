import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import usePageMeta from "@/hooks/usePageMeta";

describe("usePageMeta", () => {
  it("sets document title with suffix", () => {
    renderHook(() => usePageMeta({ title: "Contact Us" }));
    expect(document.title).toBe("Contact Us | National Benefits Services Center");
  });

  it("does not duplicate suffix for homepage", () => {
    renderHook(() => usePageMeta({ title: "National Benefits Services Center" }));
    expect(document.title).toBe("National Benefits Services Center");
  });

  it("sets meta description when provided", () => {
    const mockMeta = document.createElement("meta");
    mockMeta.name = "description";
    mockMeta.content = "old";
    document.head.appendChild(mockMeta);

    renderHook(() =>
      usePageMeta({ title: "Test", description: "New description" })
    );

    const meta = document.querySelector('meta[name="description"]');
    expect(meta?.getAttribute("content")).toBe("New description");

    document.head.removeChild(mockMeta);
  });
});
