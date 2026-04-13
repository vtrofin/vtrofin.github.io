import React from "react";

interface Props {
  size?: "small" | "large";
}

const About: React.FunctionComponent<Props> = ({ size }) => {
  const className = size ? `about-container ${size}` : "about-container";
  // see utils.duration.ts for dynamic experience calculation

  return (
    <div className={className}>
      <p>
        Senior full-stack engineer with over 8+ years of professional experience
        building production systems end-to-end, from React and TypeScript
        front-ends to Node.js APIs and AWS infrastructure.
      </p>
    </div>
  );
};

export default About;
