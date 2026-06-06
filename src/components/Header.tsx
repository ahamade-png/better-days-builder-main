import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logoNbsc from "@/assets/logo-nbsc-full.jpg";

const serviceLinks = [
  { href: "/final-expense", label: "Final Expense" },
  { href: "/medicare", label: "Medicare" },
  { href: "/supplemental", label: "Supplemental" },
  { href: "/life", label: "Life Insurance" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isServiceActive = serviceLinks.some((l) => location.pathname === l.href);

  return (
    <header
      className={`sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? "border-border shadow-md" : "border-border/50"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={logoNbsc} alt="NBSC — National Benefits Services Center" className="h-12 w-auto max-w-[180px] object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors ${
                  isServiceActive ? "text-primary-600" : "text-muted hover:text-text"
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl border border-border bg-surface py-2"
                  style={{ boxShadow: "0 12px 40px rgba(15,23,42,0.12)" }}
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`block px-4 py-2.5 text-[13px] font-medium transition-colors ${
                        location.pathname === link.href
                          ? "text-primary-600 bg-primary-50"
                          : "text-muted hover:text-text hover:bg-muted-surface"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  location.pathname === link.href ? "text-primary-600" : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Phone — SEO crawlable, clickable on mobile */}
            <a
              href="tel:+13136517596"
              className="flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-primary-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (313) 651-7596
            </a>

            <Link
              to="/contact#request"
              className="inline-flex items-center justify-center h-10 px-5 text-[13px] font-semibold text-white bg-primary-600 rounded-full shadow-[0_10px_24px_rgba(31,79,216,0.28)] hover:bg-primary-700 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile: phone + toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+13136517596"
              className="flex items-center gap-1.5 text-[12px] font-medium text-muted hover:text-primary-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">(313) 651-7596</span>
            </a>
            <button
              className="p-2 text-muted hover:text-text rounded-lg hover:bg-muted-surface transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-1 bg-surface">
            <p className="px-4 py-2 text-[11px] font-semibold tracking-widest uppercase text-muted">
              Services
            </p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-3 text-[13px] font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-primary-600 bg-primary-50"
                    : "text-muted hover:text-text hover:bg-muted-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border mx-4 my-2" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-3 text-[13px] font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-primary-600 bg-primary-50"
                    : "text-muted hover:text-text hover:bg-muted-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link
                to="/contact#request"
                className="inline-flex items-center justify-center w-full h-11 px-5 text-[13px] font-semibold text-white bg-primary-600 rounded-full shadow-[0_10px_24px_rgba(31,79,216,0.28)] hover:bg-primary-700 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
