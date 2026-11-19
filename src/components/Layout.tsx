import React from "react";
import "../styles/index.css";
import { previewData } from "../data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: previewData.name,
  jobTitle: previewData.jobTitle,
  url: previewData.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: previewData.location.city,
    addressCountry: previewData.location.country,
  },
  worksFor: {
    "@type": "Organization",
    name: previewData.organization,
  },
  knowsAbout: previewData.skills,
};

export function Head() {
  return (
    <>
      <title>Victor Trofin — Senior Full-Stack Engineer, Kyoto</title>
      <meta
        name="description"
        content="Senior full-stack engineer based in Kyoto, Japan. Experienced in TypeScript, React, Node.js, and AWS infrastructure."
      />
      <meta
        name="keywords"
        content="TypeScript, React, Node.js, AWS, full-stack engineer, tech lead, Kyoto, Japan"
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}

const Layout = ({ children }: React.PropsWithChildren) => (
  <main className="layout">{children}</main>
);

export default Layout;
