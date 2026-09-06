import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  useEffect(() => {
    // Set document title
    const fullTitle = `${title} | 04 O'CLOCK TECHNOLOGIES`;
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Update OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    }

    // Update OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }

    // Structured Data JSON-LD
    let script = document.querySelector("#structured-data-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "structured-data-jsonld";
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "04 O'CLOCK TECHNOLOGIES",
      url: window.location.origin,
      logo: `${window.location.origin}/images/logo.png`,
      description: "04 O'Clock Technologies builds modern digital products, scalable software and intelligent technology solutions.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Global Technology Headquarters",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-040-2026",
        contactType: "customer service",
        email: "contact@04oclock.tech",
      },
    };
    
    script.textContent = JSON.stringify(schema);
  }, [title, description, canonical]);

  return null;
};
