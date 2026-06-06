import { useEffect } from "react";

const SCRIPT_SRC = "https://book.buildingbetterdaysinsurance.com/js/form_embed.js";
const FORM_SRC = "https://book.buildingbetterdaysinsurance.com/widget/form/tqnEzEjPh6vVKKjzogY6";
const FORM_ID = "tqnEzEjPh6vVKKjzogY6";

interface GHLEmbedFormProps {
  /** Unique suffix so multiple embeds on one page don't collide */
  instanceId?: string;
  height?: number;
}

const GHLEmbedForm = ({ instanceId = "default", height = 560 }: GHLEmbedFormProps) => {
  useEffect(() => {
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    }

    // Listen for GHL form submission postMessage to fire Meta Pixel Lead event
    const onMessage = (event: MessageEvent) => {
      if (typeof event.origin !== "string" || !event.origin.includes("buildingbetterdaysinsurance.com")) return;
      const data = event.data;
      const type = typeof data === "string" ? data : data?.type || data?.event;
      if (typeof type === "string" && /form.*submit|submitt?ed|lead|success/i.test(type)) {
        const fbq = (window as any).fbq;
        if (typeof fbq === "function") {
          fbq("track", "Lead");
          fbq("track", "CompleteRegistration");
        }
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const iframeId = `inline-${FORM_ID}-${instanceId}`;

  return (
    <iframe
      src={FORM_SRC}
      style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "8px" }}
      id={iframeId}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Form 1"
      data-layout-iframe-id={iframeId}
      data-form-id={FORM_ID}
      title="Form 1"
    />
  );
};

export default GHLEmbedForm;
