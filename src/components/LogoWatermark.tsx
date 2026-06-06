import logoSrc from "@/assets/logo-nbsc-full.jpg";

const LogoWatermark = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] select-none"
      aria-hidden="true"
      style={{
        backgroundImage: `url(${logoSrc})`,
        backgroundSize: "320px auto",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        opacity: 0.12,
      }}
    />
  );
};

export default LogoWatermark;
