import React from 'react';

const EducationItem = props => {
  const { yearStart, yearEnd, school } = props.educationItem;
  const liStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  };

  return (
    <li>
      <div style={liStyle}>
        <div>{school}</div>
        <div>{`${yearStart} - ${yearEnd}`}</div>
      </div>
    </li>
  );
};

export default EducationItem;
