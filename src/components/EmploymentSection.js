import React from 'react';
import JobItem from './JobItem';

const EmploymentSection = ({ jobs }) => (
  <div className="employmentSection">
    <ul className="jobsUl">
      {jobs.map((jobItem, index) => (
        <JobItem key={index} jobItem={jobItem} />
      ))}
    </ul>
  </div>
);

export default EmploymentSection;
