const FALLBACK_BOOKING_URL =
  "https://calendly.com/ali-buildingbetterdaysinsurance/insurance-coverage-consultation";

export const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL?.trim() || FALLBACK_BOOKING_URL;
