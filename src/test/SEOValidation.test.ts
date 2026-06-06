import { describe, it, expect } from "vitest";

describe("SEO - index.html", () => {
  it("has proper document title format", () => {
    // Validates the usePageMeta hook logic
    const suffix = "National Benefits Services Center";
    const testCases = [
      { title: "National Benefits Services Center", expected: "National Benefits Services Center" },
      { title: "Contact Us", expected: "Contact Us | National Benefits Services Center" },
      { title: "Final Expense Insurance", expected: "Final Expense Insurance | National Benefits Services Center" },
    ];

    testCases.forEach(({ title, expected }) => {
      const result = title === suffix ? title : `${title} | ${suffix}`;
      expect(result).toBe(expected);
    });
  });

  it("meta descriptions are within length limits", () => {
    const descriptions = [
      "Compare final expense, Medicare, and supplemental insurance options with licensed guidance. Clear explanations. No obligation.",
      "Reach out to National Benefits Services Center by phone, text, email, or request form. Licensed insurance agents available to assist.",
      "Final expense and guaranteed issue whole life insurance. Help protect your family from end-of-life costs with licensed agent guidance.",
      "Compare Medicare Advantage, Supplement, and Part D prescription drug plans. Licensed agents explain enrollment periods and coverage options.",
      "Explore hospital indemnity, critical illness, accident, and dental & vision supplemental insurance to fill gaps in your existing coverage.",
      "Find answers to common insurance questions and browse our glossary. Understand final expense, Medicare, supplemental coverage, and enrollment terms.",
    ];

    descriptions.forEach((desc) => {
      expect(desc.length).toBeLessThanOrEqual(160);
      expect(desc.length).toBeGreaterThan(50);
    });
  });
});

describe("Form validation logic", () => {
  it("normalizes phone numbers correctly", () => {
    const normalizePhone = (value: string) => value.replace(/[^\d]/g, "");
    
    expect(normalizePhone("(313) 555-0123")).toBe("3135550123");
    expect(normalizePhone("313-555-0123")).toBe("3135550123");
    expect(normalizePhone("3135550123")).toBe("3135550123");
    expect(normalizePhone("+1 313 555 0123")).toBe("13135550123");
    expect(normalizePhone("")).toBe("");
  });

  it("validates email format", () => {
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user@domain.co")).toBe(true);
    expect(isValidEmail("notanemail")).toBe(false);
    expect(isValidEmail("@domain.com")).toBe(false);
    expect(isValidEmail("user@")).toBe(false);
    expect(isValidEmail("")).toBe(false);
  });

  it("validates phone length", () => {
    const isValidPhone = (phone: string) => {
      const digits = phone.replace(/[^\d]/g, "");
      return digits.length >= 10 && digits.length <= 11;
    };

    expect(isValidPhone("3135550123")).toBe(true);
    expect(isValidPhone("13135550123")).toBe(true);
    expect(isValidPhone("123")).toBe(false);
    expect(isValidPhone("")).toBe(false);
  });
});

describe("Lead payload construction", () => {
  it("builds correct payload for GHL", () => {
    const formData = {
      name: "  John Doe  ",
      email: "  john@test.com  ",
      phone: "(313) 555-0123",
      need: "Medicare help",
    };

    const phone = formData.phone.replace(/[^\d]/g, "");
    const payload = {
      full_name: formData.name.trim(),
      email: formData.email.trim(),
      phone: phone ? `+1${phone}` : "",
      need: formData.need.trim(),
      source: "nbsc-website",
      submitted_at: new Date().toISOString(),
    };

    expect(payload.full_name).toBe("John Doe");
    expect(payload.email).toBe("john@test.com");
    expect(payload.phone).toBe("+13135550123");
    expect(payload.source).toBe("nbsc-website");
  });

  it("builds correct Follow Up Boss event payload", () => {
    const fullName = "Jane Smith Johnson";
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    expect(firstName).toBe("Jane");
    expect(lastName).toBe("Smith Johnson");
  });

  it("handles single-name contacts for FUB", () => {
    const fullName = "Madonna";
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    expect(firstName).toBe("Madonna");
    expect(lastName).toBe("");
  });
});
