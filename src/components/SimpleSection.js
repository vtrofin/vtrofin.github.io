import React from 'react';

const SimpleSection = props => {
  return (
    <div className="simpleSection">
      <ul>
        {props.content.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  );
};

export default SimpleSection;
