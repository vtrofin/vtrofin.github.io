import React from "react";
import SectionSubtitle from "@components/SectionSubtitle";
import { CompetencyItemType } from "@typedefs/propTypes";

const CompetencyGrid: React.FunctionComponent<{
  items: CompetencyItemType[];
  subtitleText: string;
}> = ({ items, subtitleText }) => (
  <section>
    <SectionSubtitle subtitleText={subtitleText} />
    <div className="competency-grid">
      {items.map(({ label, description }, i) => (
        <div key={i} className="competency-item">
          <strong>{label}</strong>
          <span>{description}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CompetencyGrid;
