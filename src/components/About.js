import React from 'react';

const About = ({ size }) => {
  const className = size ? `about-container ${size}` : 'about-container';
  return (
    <div className={className}>
      <p>
        I work at{' '}
        <a href="https://www.shipandco.com" target="_blank" rel="noopener noreferrer">
          Ship&co
        </a>
        , an awesome startup that is the best way to get shipping quotes and print shipping labels
        from Japan.
      </p>
    </div>
  );
};

export default About;
