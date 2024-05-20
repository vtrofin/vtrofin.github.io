import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import GeneralDetails from "@components/GeneralDetails";
import About from "@components/About";
import SimpleSection from "@components/SimpleSection";
import EducationSection from "@components/EducationSection";
import EmploymentSection from "@components/EmploymentSection";
import {
  EducationItemType,
  JobDescriptionType,
  JobItemType,
  DataProps,
} from "@typedefs/propTypes";
import type { PageProps } from "gatsby";

const personalDetails = {
  name: "Victor Trofin",
  location: "Kyoto, Japan",
};

const skills: string[] = [
  "Highly responsible and adaptable - Led the UI implementation for an AI powered call center",
  "Proactive problem solver with strong analytical skills - Implemented a custom call center UI that tripled call center efficiency, aligning solutions with project goals",
  "Good communication and presentation skills - demonstrated in a collaborative, interdisciplinary AI team environment ",
  "Good time management skills",
  "Languages spoken: native Romanian, fluent in English, basic Japanese",
];

const technicalSkills: string[] = [
  "Proficient in TypeScript and ReScript",
  "Advanced front-end development skills with React, Next.js, CSS, Tailwind and Vue.js",
  "Comprehensive back-end development experience with Node.js, Fastify, MongoDB, PostgreSQL, Prisma, Redis",
  "Proficient in designing and consuming XML, REST, and GraphQL APIs",
  "Experienced with DevOps tools such as GitHub Actions, CircleCI, Docker, Terraform, AWS",
  "Competent in testing using Mocha, Jest, UVU and performance monitoring with Sentry",
];

const education: EducationItemType[] = [
  {
    yearStart: "2009",
    yearEnd: "2013",
    school:
      "Bucharest University of Economic Studies - Master in International Business",
  },
  {
    yearStart: "2003",
    yearEnd: "2008",
    school:
      "Politehnica University of Bucharest - Faculty of Power Engineering",
  },
];

const calliope: JobDescriptionType = {
  description: "Calliope: AI powered call center",
  achievements: [
    "Led implementation of the front-end with React, Amazon Connect and Tailwind CSS",
    "Set up project tooling and implemented a custom UI, significantly improving efficiency",
    "Recruited and onboarded top-tier front-end developers, ensuring project excellence",
  ],
};

const ats: JobDescriptionType = {
  description: "Bluum Hire: Applicant tracking system",
  achievements: [
    "Developed UI features and GraphQL API with ReScript, Next.js, Fastify, and PostgreSQL",
    "Managed emails with SendGrid, facilitated seamless CSV data exports, ensured GDPR compliance",
    "Ensured deployment efficiency by refactoring CI/CD pipelines with Github Actions and Docker",
    "Contributed to AWS and Terraform provisioning",
  ],
};

const shipandco: JobDescriptionType = {
  description:
    "Ship&co: Web app to compare shipping rates and create shipping labels",
  achievements: [
    "Executed major releases with partner APIs: Shopify, DHL and Yamato",
    "Implemented comprehensive full-stack features with Meteor, React and Express.js",
    "Led UI development for new pricing strategy, delivered impactful feature to schedule parcel pick-ups and ensured GDPR compliance",
  ],
};

const jobs: JobItemType[] = [
  {
    company: "Scoville",
    yearStart: "May 2021",
    jobTitle: "Full-stack web engineer, Kyoto",
    jobDescription: [calliope, ats],
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

const other: string[] = [
  "Foundational knowledge in Rust and Swift, enabling me to contribute and improve on the job",
  "Alumnus of Board of European Students of Technology",
];

const IndexPage: React.FunctionComponent<PageProps<DataProps>> = (props) => {
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

      <SimpleSection content={skills} subtitleText="Abilities" />

      <SimpleSection
        content={technicalSkills}
        subtitleText="Technical Skills"
      />

      <EmploymentSection jobs={jobs} subtitleText="Employment history" />
      {/* <div className={pageBreakClass + " bottom"} /> */}
      {/* {isSafari && <div className={pageBreakClass + " top"} />} */}

      <EducationSection education={education} subtitleText="Education" />
      {/* <div className={pageBreakClass + " top"} /> */}

      <SimpleSection
        content={other}
        subtitleText="Other activities and interests"
      />
      {/* {isSafari && <div className={pageBreakClass + " bottom"} />} */}
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
