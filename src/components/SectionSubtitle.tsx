import React from "react";

const SectionSubtitle: React.FunctionComponent<{ subtitleText: string }> = ({
  subtitleText,
}) => (
  <div className="sectionSubtitle">
    <h2>{subtitleText}</h2>
  </div>
);

export default SectionSubtitle;
