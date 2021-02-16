import React from 'react';

const JobTitle = ({ title }) => (title ? <p style={{ fontStyle: 'italic' }}>{title}</p> : null);

const LineItem = ({ item }) => {
  if (typeof item === 'string') return <li>{item}</li>;

  const { description, achievements } = item;
  return (
    <li className="no-indent">
      {description}
      <ul className="achievements">
        {achievements.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </li>
  );
};

const JobItem = ({ jobItem }) => {
  const { company, yearStart, yearEnd, city, jobTitle, jobDescription } = jobItem;

  return (
    <li className="liJobItem">
      <div className="jobItem">
        <div className="jobItemFirstLine">
          <h3>{company}</h3>
          <p>{`${yearStart} - ${yearEnd ? yearEnd : ''}`}</p>
        </div>
        {city && <p style={{ fontStyle: 'italic' }}>{city}</p>}
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
