import React from 'react';
import Layout from '../components/Layout';
import GeneralDetails from '../components/GeneralDetails';
import About from '../components/About';
import SectionSubtitle from '../components/SectionSubtitle';
import SimpleSection from '../components/SimpleSection';
import EducationSection from '../components/EducationSection';
import EmploymentSection from '../components/EmploymentSection';

const personalDetails = {
  name: 'Victor Trofin',
  location: 'Kyoto, Japan',
  email: 'trofin.victor@gmail.com',
  phone: '+81-80-4496-5881',
};

const skills = [
  'Javascript ES6, Blazejs, React, Redux, Webpack, CSS, SASS',
  'Node.js, Meteor, Express, MongoDB, SQL, familiar with Python',
  'APIs: XML, REST, GraphQL',
  'Unit testing with Mocha and Jest',
  'Familiar with React Native',
  'Problem solving oriented and strong business judgment',
  'Strong sense of responsibility and very good adaptability',
  'Good communication and presentation skills',
  'Good time management skills',
  'Languages spoken: Romanian – mother tongue, fluent in English, intermediate Italian, basic Japanese',
];

const education = [
  {
    yearStart: '2009',
    yearEnd: '2013',
    school: 'Bucharest University of Economic Studies – Master in International Business',
  },
  {
    yearStart: '2003',
    yearEnd: '2008',
    school: 'Politehnica University of Bucharest – Faculty of Power Engineering',
  },
];

const shipandco = {
  description:
    'Ship&co: Meteor app that enables users to compare shipping rates and print shipping labels',
  achievements: [
    'Integrated and upgraded REST and XML APIs into Ship&co: Shopify, Tradegecko, DHL, DHL Ecommerce Asia',
    'Front-end side for the new pricing strategy, entailing the migration to monthly pricing plans',
    'UI enhancements ',
  ],
};

const stockandco = {
  description:
    'Stock&co: Meteor app that synchronizes product and inventory data across multiple Shopify stores',
  achievements: [
    'Modified the database structure to enable product synchronization across stores',
    'Set-up REST API to enable inventory data synchronization with the warehouse',
    'Implemented logging and Slack alerts',
  ],
};

const internalApps = {
  description:
    'Ship&co staff: React/ REST API, Ship&co utils: Handlebars/ Node.js: apps for internal use with features such as KPIs, Github integration and e-commerce test orders creation',
  achievements: [
    'Implemented data exportation to CSV',
    'API endpoint enhancements',
    'UI enhancements',
    'Feature to create test orders via the Tradegecko API',
  ],
};

const jobs = [
  {
    company: 'Bento&co/ Ship&co',
    yearStart: 'Feb 2018',
    city: 'Kyoto',
    jobTitle: 'Accomplishments:',
    jobDescription: [
      shipandco,
      stockandco,
      internalApps,
      'Various UI enhancements on Bento&co Shopify stores',
    ],
  },
  {
    company: 'SmoothJapan',
    yearStart: 'Sep 2017',
    yearEnd: 'Dec 2017',
    city: 'Kyoto',
    jobTitle: 'Front End work for WordPress',
    jobDescription: [
      'Markup and CSS styling for various clients: Makers Bootcamp, Kyoto Makers Garage, GVH Osaka',
    ],
  },
  {
    company: 'Self-employed',
    yearStart: '2011',
    yearEnd: '2015',
    city: 'Bucharest',
    jobTitle: 'Managed several websites',
    jobDescription: [
      'Light development tasks in HTML, CSS, PHP',
      'Web marketing and customer support',
    ],
  },
];

const other = [
  'Former co-organizer of the <a href="https://www.meetup.com/Osaka-Web-Designers-and-Developers-Meetup/">Osaka Web Designers and Developers</a> Meetup',
  'Taking part in <a href="https://www.meetup.com/Hacker-News-Kansai/">Hacker News Kansai</a> Meetups',
];

const IndexPage = props => {
  return (
    <Layout>
      <GeneralDetails personalDetails={personalDetails} />
      <About size="small" />
      <SectionSubtitle subtitleText="Skills and abilities profile" />
      <SimpleSection content={skills} />
      <SectionSubtitle subtitleText="Education" />
      <EducationSection education={education} />
      <SectionSubtitle subtitleText="Employment history*" />
      <EmploymentSection jobs={jobs} />
      <SectionSubtitle subtitleText="Other activities and interests" />
      <p>Active in the Kansai developer community:</p>
      <SimpleSection content={other} />
      <p style={{ fontStyle: 'italic' }}>*only relevant positions mentioned. </p>
    </Layout>
  );
};

export default IndexPage;
