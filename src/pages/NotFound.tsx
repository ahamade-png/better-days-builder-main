import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="page-wrapper">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-primary-600">404</h1>
          <p className="mb-6 text-xl text-muted">Page not found</p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
