import React from "react";
import EducationItem from "@components/EducationItem";
import { EducationItemType } from "@typedefs/propTypes";
import SectionSubtitle from "@components/SectionSubtitle";

const EducationSection: React.FunctionComponent<{
  education: EducationItemType[];
  subtitleText: string;
}> = ({ education, subtitleText }) => (
  <div>
    <SectionSubtitle subtitleText={subtitleText} />
    <ul>
      {education.map((educationItem, index) => (
        <EducationItem key={index} educationItem={educationItem} />
      ))}
    </ul>
  </div>
);

export default EducationSection;
