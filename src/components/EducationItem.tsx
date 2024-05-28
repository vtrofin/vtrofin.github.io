import React from "react";
import { EducationItemType } from "@typedefs/propTypes";

interface Props {
  educationItem: EducationItemType;
}

const EducationItem: React.FunctionComponent<Props> = ({ educationItem }) => {
  const { yearStart, yearEnd, school } = educationItem;

  return (
    <li>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div>{school}</div>
        <div>{`${yearStart} - ${yearEnd}`}</div>
      </div>
    </li>
  );
};

export default EducationItem;
