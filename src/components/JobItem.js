import React from 'react';

const JobTitle = ({ title }) => (title ? <p>{title}</p> : null);

const LineItem = ({ item }) => {
  if (typeof item === 'string') return <li dangerouslySetInnerHTML={{ __html: item }} />;

  const { description, achievements } = item;
  return (
    <div>
      {description}
      <ul>
        {achievements.map((line, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </ul>
    </div>
  );
};

const JobItem = ({ jobItem }) => {
  const { company, yearStart, yearEnd, city, jobTitle, jobDescription } = jobItem;

  return (
    <li className="liJobItem">
      <div className="jobItem">
        <div className="jobItemFirstLine">
          <h3>
            {company} <span style={{ fontStyle: 'italic' }}>{city}</span>
          </h3>
          <p>{`${yearStart} - ${yearEnd ? yearEnd : ''}`}</p>
        </div>
        <JobTitle title={jobTitle} />
        <div>
          <ul className="jobItemUl">
            {jobDescription.map((item, i) => (
              <LineItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default JobItem;
