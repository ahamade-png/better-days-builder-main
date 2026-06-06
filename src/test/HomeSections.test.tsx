import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "@/components/home/HeroSection";
import ProductTiles from "@/components/home/ProductTiles";
import HowItWorks from "@/components/home/HowItWorks";
import TrustBar from "@/components/home/TrustBar";
import FAQPreview from "@/components/home/FAQPreview";

describe("HeroSection", () => {
  it("renders headline", () => {
    render(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    );
    expect(screen.getByText(/The Right Coverage/i)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    );
    expect(screen.getByText("Request a Personalized Benefits Review")).toBeInTheDocument();
    expect(screen.getByText("Explore Coverage Options")).toBeInTheDocument();
  });

  it("renders micro trust items", () => {
    render(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    );
    expect(screen.getByText("No obligation")).toBeInTheDocument();
    expect(screen.getByText("Takes 2–5 minutes")).toBeInTheDocument();
  });
});

describe("ProductTiles", () => {
  it("renders section title", () => {
    render(
      <BrowserRouter>
        <ProductTiles />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading", { name: /Coverage Matched/i })).toBeInTheDocument();
  });
});

describe("HowItWorks", () => {
  it("renders all steps", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Discovery")).toBeInTheDocument();
    expect(screen.getByText("Suitability Review")).toBeInTheDocument();
    expect(screen.getByText("Recommendations")).toBeInTheDocument();
    expect(screen.getByText("Implementation")).toBeInTheDocument();
  });
});

describe("TrustBar", () => {
  it("renders trust points", () => {
    render(<TrustBar />);
    expect(screen.getByText(/Why Families Choose Us/i)).toBeInTheDocument();
  });
});

describe("FAQPreview", () => {
  it("renders FAQ questions", () => {
    render(
      <BrowserRouter>
        <FAQPreview />
      </BrowserRouter>
    );
    expect(screen.getByText(/one carrier or multiple/i)).toBeInTheDocument();
    expect(screen.getByText(/coverage review/i)).toBeInTheDocument();
  });
});
