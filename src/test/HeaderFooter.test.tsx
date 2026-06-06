import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

describe("Header", () => {
  it("renders logo image", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByAltText("NBSC logo")).toBeInTheDocument();
  });

  it("renders company name", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/Building Better Days LLC/)).toBeInTheDocument();
  });

  it("renders nav links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("Final Expense")).toBeInTheDocument();
    expect(screen.getByText("Medicare")).toBeInTheDocument();
    expect(screen.getByText("Supplemental")).toBeInTheDocument();
    expect(screen.getByText("Resources")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const ctas = screen.getAllByText("Request Information");
    expect(ctas.length).toBeGreaterThan(0);
  });
});

describe("Footer", () => {
  it("renders company name with logo", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getAllByAltText("NBSC logo").length).toBeGreaterThan(0);
  });

  it("renders phone number", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText(/313-442-7350/)).toBeInTheDocument();
  });

  it("renders product links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText("Final Expense")).toBeInTheDocument();
    expect(screen.getByText("Medicare")).toBeInTheDocument();
    expect(screen.getByText("Supplemental")).toBeInTheDocument();
  });

  it("renders copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });

  it("renders disclaimer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText(/independent agency/i)).toBeInTheDocument();
  });
});
