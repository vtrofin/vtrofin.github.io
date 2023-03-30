import React from "react";

const About = ({ size }) => {
  const className = size ? `about-container ${size}` : "about-container";
  return (
    <div className={className}>
      <p>
        Versatile full-stack web engineer with over 5 years in Japan's SaaS
        space, adept in the JavaScript ecosystem, leveraging diverse tech stacks
        to revolutionize user experiences.
      </p>
    </div>
  );
};

export default About;
