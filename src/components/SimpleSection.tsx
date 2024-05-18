import React from "react";

const SimpleSection: React.FunctionComponent<{ content: string[] }> = ({
  content,
}) => {
  return (
    <div className="simpleSection">
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleSection;
