import React from 'react';

const LineItem = ({ item }) => {
  const isObject = typeof item === 'object' && item !== null;
  if (!isObject) return <li dangerouslySetInnerHTML={{ __html: item }} />;

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
  console.log('jobItem -->', jobItem);
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
        <p>{jobTitle}</p>
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
