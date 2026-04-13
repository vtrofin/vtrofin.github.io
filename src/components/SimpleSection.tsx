import React from "react";
import SectionSubtitle from "@components/SectionSubtitle";

const SimpleSection: React.FunctionComponent<{
  content: string[];
  subtitleText: string;
}> = ({ content, subtitleText }) => {
  return (
    <section>
      <SectionSubtitle subtitleText={subtitleText} />
      <div className="simpleSection">
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SimpleSection;
