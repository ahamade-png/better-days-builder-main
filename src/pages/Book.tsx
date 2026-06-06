import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";

const BookRedirect = () => {
  useEffect(() => {
    window.location.href = "https://calendly.com/ali-buildingbetterdaysinsurance/insurance-coverage-consultation";
  }, []);
  return null;
};

export default BookRedirect;
