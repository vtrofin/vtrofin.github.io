import React from "react";
import { differenceInYears, formatDuration } from "date-fns";

interface Props {
  size?: "small" | "large";
}

const About: React.FunctionComponent<Props> = ({ size }) => {
  const className = size ? `about-container ${size}` : "about-container";
  const today = new Date();
  const init = new Date(2018, 1, 1);
  const years = differenceInYears(today, init);
  const duration = formatDuration({ years });

  return (
    <div className={className}>
      <p>
        Versatile full-stack web engineer with over {duration} of expertise.
        Skilled in cross-functional collaboration, I leverage diverse tech
        stacks to innovate user experiences and drive business growth.
      </p>
    </div>
  );
};

export default About;
