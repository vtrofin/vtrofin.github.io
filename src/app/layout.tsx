import type { Metadata } from "next";
import { previewData } from "@/data";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Victor Trofin — Senior Full-Stack Engineer, Kyoto",
  description:
    "Senior full-stack engineer based in Kyoto, Japan. Experienced in TypeScript, React, Node.js, and AWS infrastructure.",
  keywords: [
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "full-stack engineer",
    "tech lead",
    "Kyoto",
    "Japan",
  ],
};

const themeScript = `(function(){try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="m-0 bg-white font-serif text-[rgba(0,0,0,0.8)] dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
