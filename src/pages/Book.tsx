import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { BOOKING_URL } from "@/lib/booking";

const BookRedirect = () => {
  useEffect(() => {
    window.location.href = BOOKING_URL;
  }, []);
  return null;
};

export default BookRedirect;
