import React from 'react';

const About = ({ size }) => {
  const className = size ? `about-container ${size}` : 'about-container';
  return (
    <div className={className}>
      <p>
        My area of expertise, not limited to, lies in building systems for e-commerce and logistics.
        I work at{' '}
        <a href="https://www.shipandco.com" target="_blank" rel="noopener noreferrer">
          Ship&co
        </a>
        , an awesome startup building an all-in-one shipping management solution for e-commerce.{' '}
      </p>
    </div>
  );
};

export default About;
