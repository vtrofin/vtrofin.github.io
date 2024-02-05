import React from "react";
import { differenceInYears, formatDuration } from "date-fns";

const About = ({ size }) => {
  const className = size ? `about-container ${size}` : "about-container";
  const today = new Date();
  const init = new Date(2018, 1, 1);
  const years = differenceInYears(today, init);
  const duration = formatDuration({ years });

  return (
    <div className={className}>
      <p>
        Experienced full-stack web engineer with over {duration} of expertise.
        Proficient in the JavaScript ecosystem, I leverage diverse tech stacks
        to innovate user experiences.
      </p>
    </div>
  );
};

export default About;
