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
  phone: '+81-80-4496-5881'
};

const technicalSkills = [
  'Programming Languages: Javascript, Node.js, Python, Go',
  'Front-end: React, Vue.js, Handlebars, Next.js, Gatsby, CSS, SASS',
  'Back-end: Express, Feathers JS, Fastify, Vercel serverless, Meteor, MongoDB, SQL',
  'APIs: XML, REST, GraphQL',
  'Unit testing with Mocha and Jest',
  'Familiar with React Native and Kotlin'
];

const skills = [
  'Problem solving oriented and strong business judgment',
  'Strong sense of responsibility and very good adaptability',
  'Good communication and presentation skills',
  'Good time management skills',
  'Languages spoken: Romanian – mother tongue, fluent in English, intermediate Italian, basic Japanese'
];

const education = [
  {
    yearStart: '2009',
    yearEnd: '2013',
    school: 'Bucharest University of Economic Studies – Master in International Business'
  },
  {
    yearStart: '2003',
    yearEnd: '2008',
    school: 'Politehnica University of Bucharest – Faculty of Power Engineering'
  }
];

const shipandco = {
  description: 'Ship&co: Web app to compare shipping rates and create shipping labels',
  achievements: [
    'Integration of API and major releases: Shopify, QuickBook Commerce , DHL, DHL eCommerce Asia, Yamato',
    'Implement new pricing strategy: build the UI and back-end bug fixes',
    'Implement GDPR requirements: download and delete user data',
    'Implement scheduling of Pickups in Ship&co'
  ]
};

const stockandco = {
  description: 'Stock&co: Shopify app that syncs products and inventory across multiple stores',
  achievements: [
    'Restructure the database to enable synchronization across stores',
    'Set-up REST API with endpoints for product and inventory synchronization',
    'Implemented user validation, logging and Slack alerts'
  ]
};

const internalApps = {
  description: 'Ship&Co Internal apps and Bento&Co',
  achievements: ['UI and back-end enhancements and performance optimizations']
};

const jobs = [
  {
    company: 'BertrandCo',
    yearStart: 'Feb 2018',
    // city: 'Kyoto',
    jobTitle: 'Full-stack web engineer, Kyoto',
    jobDescription: [shipandco, stockandco, internalApps]
  },
  {
    company: 'SmoothJapan',
    yearStart: 'Sep 2017',
    yearEnd: 'Dec 2017',
    jobTitle: 'Web engineer, Kyoto',
    jobDescription: [
      'Markup and CSS styling for various clients: Makers Bootcamp, Kyoto Makers Garage, GVH Osaka'
    ]
  },
  {
    company: 'Universal Campus | 京進の英会話教室 ユニバーサルキャンパス',
    yearStart: '2016',
    yearEnd: '2018',
    jobTitle: 'English teacher, Kyoto',
    jobDescription: ['Taught English while re-focusing my career towards web-engineering']
  },
  {
    company: 'Self-employed',
    yearStart: '2011',
    yearEnd: '2015',
    jobTitle: 'Managed several websites, Bucharest',
    jobDescription: [
      'Light development tasks in HTML, CSS and PHP, web marketing and customer support'
    ]
  },
  {
    company: 'CII Group',
    yearStart: '2009',
    yearEnd: '2011',
    jobTitle: 'Consultant, Bucharest',
    jobDescription: [
      'Organizational restructuring and project management in the field of logistics'
    ]
  },
  {
    company: 'Roland Berger Strategy Consultants',
    yearStart: '2008',
    yearEnd: '2009',
    jobTitle: 'Business Analyst, Bucharest',
    jobDescription: [
      'Strategy consulting and organizational restructuring in the fields of manufacturing and logistics'
    ]
  }
];

const other = [
  'Active in the Kansai developer community: <a href="https://www.meetup.com/Osaka-Web-Designers-and-Developers-Meetup/">Osaka Web Designers and Developers</a> and <a href="https://www.meetup.com/Hacker-News-Kansai/">Hacker News Kansai</a>',
  'I spend my free time gaining knowledge in Machine Learning',
  'Alumnus of Board of European Students of Technology'
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
      <div class="page-break" />
      <SectionSubtitle subtitleText="Employment history" />
      <EmploymentSection jobs={jobs} />
      <SectionSubtitle subtitleText="Other activities and interests" />
      <SimpleSection content={other} />
    </Layout>
  );
};

export default IndexPage;
