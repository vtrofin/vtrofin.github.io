import React from "react";
import JobItem from "@components/JobItem";
import { JobItemType } from "@typedefs/propTypes";
import SectionSubtitle from "@components/SectionSubtitle";

interface Props {
  jobs: JobItemType[];
  subtitleText: string;
}

const EmploymentSection: React.FunctionComponent<Props> = ({
  jobs,
  subtitleText,
}) => (
  <div>
    <SectionSubtitle subtitleText={subtitleText} />
    <div className="employmentSection">
      <ul className="jobsUl">
        {jobs.map((jobItem, index) => (
          <JobItem key={index} jobItem={jobItem} />
        ))}
      </ul>
    </div>
  </div>
);

export default EmploymentSection;
