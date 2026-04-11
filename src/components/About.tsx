import React from "react";
// import { differenceInYears, formatDuration } from "date-fns";

interface Props {
  size?: "small" | "large";
}

const About: React.FunctionComponent<Props> = ({ size }) => {
  const className = size ? `about-container ${size}` : "about-container";
  // const today = new Date();
  // const init = new Date(2018, 1, 1);
  // const years = differenceInYears(today, init);
  // const duration = formatDuration({ years });

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
