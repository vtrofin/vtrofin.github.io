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

const technicalSkills = [
  'Programming Languages: Javascript, Node.js, Python, Go',
  'Front-end: React, Vue.js, Handlebars, Next.js, Gatsby, CSS, SASS',
  'Back-end: Express, Feathers JS, Fastify, Vercel serverless, Meteor, MongoDB, SQL',
  'APIs: XML, REST, GraphQL',
  'Unit testing with Mocha and Jest',
  'Familiar with React Native, Kotlin',
];

const skills = [
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
  description: 'Ship&co: Meteor app that enables users to print shipping labels',
  achievements: [
    'Integration/ enhancements of REST and XML APIs into Ship&co: Shopify, Tradegecko, DHL, DHL Ecommerce Asia',
    //'Front-end side for the new pricing strategy, entailing the migration to monthly pricing plans',
    'UI enhancements ',
  ],
};

const stockandco = {
  description: 'Stock&co: Meteor app that synchronizes product data across multiple Shopify stores',
  achievements: [
    'Modified the database structure to enable product synchronization across stores',
    'Set-up REST API to enable inventory data synchronization with the warehouse',
    'Implemented logging and Slack alerts',
  ],
};

const internalApps = {
  description:
    'Ship&co staff, Ship&co utils: React/ REST API and Handlebars/ Node.js apps for internal use',
  achievements: [
    'Implemented data exportation to CSV',
    //'API endpoint enhancements',
    //'UI enhancements',
    'Feature to create test orders via the Tradegecko API',
  ],
};

const jobs = [
  {
    company: 'Ship&co',
    yearStart: 'Feb 2018',
    city: 'Kyoto',
    jobDescription: [
      //'Various UI enhancements on Bento&co Shopify stores',
      shipandco,
      stockandco,
      internalApps,
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
  'Active in the Kansai developer community: <a href="https://www.meetup.com/Osaka-Web-Designers-and-Developers-Meetup/">Osaka Web Designers and Developers</a> and <a href="https://www.meetup.com/Hacker-News-Kansai/">Hacker News Kansai</a>',
  'I spend my free time gaining knowledge in Machine Learning',
];

const IndexPage = props => {
  return (
    <Layout>
      <GeneralDetails personalDetails={personalDetails} />
      <About />
      <SectionSubtitle subtitleText="Technical Skills" />
      <SimpleSection content={technicalSkills} />
      <SectionSubtitle subtitleText="Abilities" />
      <SimpleSection content={skills} />
      <SectionSubtitle subtitleText="Education" />
      <EducationSection education={education} />
      <SectionSubtitle subtitleText="Employment history*" />
      <EmploymentSection jobs={jobs} />
      <SectionSubtitle subtitleText="Other activities and interests" />
      <SimpleSection content={other} />
      <p style={{ fontStyle: 'italic', marginTop: '3rem' }}>*only relevant positions mentioned. </p>
    </Layout>
  );
};

export default IndexPage;
