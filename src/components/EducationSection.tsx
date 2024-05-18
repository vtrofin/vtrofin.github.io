import React from "react";
import EducationItem from "@components/EducationItem";
import { EducationItemType } from "@typedefs/propTypes";

const EducationSection: React.FunctionComponent<{
  education: EducationItemType[];
}> = ({ education }) => (
  <div>
    <ul>
      {education.map((educationItem, index) => (
        <EducationItem key={index} educationItem={educationItem} />
      ))}
    </ul>
  </div>
);

export default EducationSection;
