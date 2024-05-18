import React from "react";
import JobItem from "@components/JobItem";
import { JobItemType } from "@typedefs/propTypes";

interface Props {
  jobs: JobItemType[];
}

const EmploymentSection: React.FunctionComponent<Props> = ({ jobs }) => (
  <div className="employmentSection">
    <ul className="jobsUl">
      {jobs.map((jobItem, index) => (
        <JobItem key={index} jobItem={jobItem} />
      ))}
    </ul>
  </div>
);

export default EmploymentSection;
