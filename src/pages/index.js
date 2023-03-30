import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GeneralDetails from "../components/GeneralDetails";
import About from "../components/About";
import SectionSubtitle from "../components/SectionSubtitle";
import SimpleSection from "../components/SimpleSection";
import EducationSection from "../components/EducationSection";
import EmploymentSection from "../components/EmploymentSection";

const personalDetails = {
  name: "Victor Trofin",
  location: "Kyoto, Japan",
};

const technicalSkills = [
  "Proficient in TypeScript, Node.js, ReScript; Swift (personal project); Rust, Python, Go (basic)",
  "Skilled in front-end development using React, Next.js, CSS, Tailwind; Vue.js, Gatsby,  SwiftUI (personal project)",
  "Experienced in back-end development using Fastify, Express, MongoDB, PostgreSQL, Prisma ORM, Redis PubSub, WebSocket",
  "Knowledgeable about XML, REST and GraphQL APIs",
  "Experienced with DevOps tools such as GitHub Actions, CircleCI, Docker, Terraform, AWS",
  "Competent in testing using Mocha, Jest, UVU",
];

const skills = [
  "Analytical thinker capable of identifying solutions aligned with business needs",
  "Strong sense of responsibility and very good adaptability",
  "Good communication and presentation skills",
  "Good time management skills",
  "Languages spoken: Romanian – mother tongue, fluent in English, basic Japanese",
];

const education = [
  {
    yearStart: "2009",
    yearEnd: "2013",
    school:
      "Bucharest University of Economic Studies – Master in International Business",
  },
  {
    yearStart: "2003",
    yearEnd: "2008",
    school:
      "Politehnica University of Bucharest – Faculty of Power Engineering",
  },
];

const shipandco = {
  description:
    "Ship&co: Web app to compare shipping rates and create shipping labels",
  achievements: [
    "Implemented major releases with partner APIs: Shopify, QuickBook Commerce, DHL, Yamato",
    "Developed features with Meteor and Handlebars. Key contributions: led effort to built the UI for a new pricing strategy, schedule parcel pick-ups, ensured GDPR compliance",
    "Implemented full-stack features on internal apps using React, Meteor and Express.js. Key contributions: set-up a REST API for inventory synchronization, user validation and logging",
  ],
};

const ats = {
  description: "Bluum Hire: Applicant tracking system",
  achievements: [
    "Implemented UI features and major releases with ReScript, Tailwind CSS and Next.js",
    "Implemented GraphQL API features with TypeScript, Prisma and Fastify",
    "Key contributions: send and receive emails with SendGrid, schedule events for job applicants, export candidate data to CSV",
    "Refactored and set-up new CI/CD pipelines with Github Actions and Docker",
    "Contributed to the provisioning of the production environment with AWS and Terraform",
  ],
};

const jobs = [
  {
    company: "Scoville",
    yearStart: "May 2021",
    jobTitle: "Full-stack web engineer, Kyoto",
    jobDescription: [ats],
  },
  {
    company: "BertrandCo",
    yearStart: "Feb 2018",
    yearEnd: "Apr 2021",
    // city: 'Kyoto',
    jobTitle: "Full-stack web engineer, Kyoto",
    jobDescription: [shipandco],
  },
  {
    company: "Universal Campus | 京進の英会話教室 ユニバーサルキャンパス",
    yearStart: "2016",
    yearEnd: "2018",
    jobTitle: "English teacher, Kyoto",
    jobDescription: [
      "Taught English while re-focusing my career towards full-time web-engineering",
    ],
  },
  {
    company: "Self-employed",
    yearStart: "2011",
    yearEnd: "2015",
    jobTitle: "Managed several websites, Bucharest",
    jobDescription: [
      "Light development tasks in HTML, CSS and PHP, web marketing and customer support",
    ],
  },
  {
    company: "Roland Berger | CII Group",
    yearStart: "2008",
    yearEnd: "2011",
    jobTitle: "Consultant, Bucharest",
    jobDescription: [
      "Strategy consulting and organizational restructuring in the logistics and oil&gas industries",
    ],
  },
];

const other = [
  "I spend my free time gaining knowledge of Machine Learning, Rust and Swift",
  "Alumnus of Board of European Students of Technology",
];

const IndexPage = (props) => {
  const [pageBreakClass, setPageBreakClass] = useState("page-break");
  const [isBot, setIsBot] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const agent = window.navigator.userAgent;
    const isFirefox = /firefox/gi.test(agent);
    const isChrome = /chrome/gi.test(agent);
    const isSafari = /safari/gi.test(agent);
    const bot =
      /bot|googlebot|crawler|spider|robot|crawling|google|baidu|bing|msn|teoma|slurp|yandex/i.test(
        window.navigator.userAgent,
      );
    setIsBot(bot);

    if (isFirefox) {
      setPageBreakClass(pageBreakClass + " firefox");
    } else if (isChrome) {
      setPageBreakClass(pageBreakClass + " chrome");
    } else if (!isChrome && isSafari) {
      setIsSafari(true);
      setPageBreakClass(pageBreakClass + " safari");
    }
  }, []);

  return (
    <Layout>
      <GeneralDetails
        personalDetails={{
          ...personalDetails,
          email: isBot ? "" : props.data.site.siteMetadata.email,
          phone: isBot ? "" : props.data.site.siteMetadata.phone,
        }}
      />
      <About />
      <SectionSubtitle subtitleText="Technical Skills" />
      <SimpleSection content={technicalSkills} />
      <SectionSubtitle subtitleText="Abilities" />
      <SimpleSection content={skills} />
      <SectionSubtitle subtitleText="Education" />
      <EducationSection education={education} />
      <div className={pageBreakClass + " top"} />
      <SectionSubtitle subtitleText="Employment history" />
      <EmploymentSection jobs={jobs} />
      <div className={pageBreakClass + " bottom"} />
      {isSafari && <div className={pageBreakClass + " top"} />}
      <SectionSubtitle subtitleText="Other activities and interests" />
      <SimpleSection content={other} />
      {isSafari && <div className={pageBreakClass + " bottom"} />}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        phone
        email
      }
    }
  }
`;
