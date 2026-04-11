import React from "react";
import Helmet from "react-helmet";
import "../styles/index.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Victor Trofin",
  jobTitle: "Senior Full-Stack Engineer",
  url: "https://vtrofin.github.io",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kyoto",
    addressCountry: "JP",
  },
  worksFor: {
    "@type": "Organization",
    name: "Scoville",
  },
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "GraphQL",
    "AWS",
    "Terraform",
    "Docker",
  ],
};

const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <Helmet
      title="Victor Trofin — Senior Full-Stack Engineer, Kyoto"
      meta={[
        {
          name: "description",
          content:
            "Senior full-stack engineer and tech lead based in Kyoto, Japan. Experienced in TypeScript, React, Node.js, and AWS infrastructure.",
        },
        {
          name: "keywords",
          content:
            "TypeScript, React, Node.js, AWS, full-stack engineer, tech lead, Kyoto, Japan",
        },
      ]}
      script={[
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(jsonLd),
        },
      ]}
    />
    <main className="layout">{children}</main>
  </>
);

export default Layout;
