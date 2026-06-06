import { useEffect } from "react";
import ogImage from "@/assets/hero-family.jpg";

interface PageMeta {
  title: string;
  description?: string;
  /** Path beginning with "/" — defaults to current location pathname */
  path?: string;
  /** Absolute or imported image URL for og:image / twitter:image */
  image?: string;
}

const SITE = "https://www.nationalbsc.com";
const SUFFIX = "National Benefits Services Center";


const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    const [, name] = selector.match(/\[(?:name|property)="([^"]+)"\]/) || [];
    if (selector.includes("property=")) el.setAttribute("property", name);
    else el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const usePageMeta = ({ title, description, path, image }: PageMeta) => {
  useEffect(() => {
    const fullTitle = title === SUFFIX ? title : `${title} | ${SUFFIX}`;
    document.title = fullTitle;

    const pathname = path ?? (typeof window !== "undefined" ? window.location.pathname : "/");
    const url = `${SITE}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
    const imageUrl = image
      ? (image.startsWith("http") ? image : `${SITE}${image}`)
      : `${SITE}${ogImage}`;

    setCanonical(url);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:image"]', "content", imageUrl);

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }
  }, [title, description, path, image]);
};

export default usePageMeta;
