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
  "Highly adaptable — grew from front-end lead to full technical ownership across the stack",
  "Proactive problem solver — call center UI tripled agent efficiency; tackles root causes over quick fixes",
  "Strong communicator — clear documentation and cross-functional collaboration across AI teams",
  "Security-conscious — supply chain mitigation, GDPR data erasure and input validation",
  "Languages spoken: native Romanian, fluent in English, basic Japanese",
];

const technicalSkills: string[] = [
  "Languages: TypeScript, ReScript",
  "Front-end: React, React Router v7, Next.js, Vue.js, Tailwind CSS, shadcn/radix UI, Storybook",
  "Back-end & APIs: Node.js, PostgreSQL, Drizzle ORM, Redis, MongoDB, REST, GraphQL" /*Fastify, Prisma */,
  "AWS: Lambda, Fargate, EventBridge, SQS, S3, SES, Amazon Connect, DocumentDB",
  "Infrastructure & DevOps: Terraform, CDK, SST, Docker, GitHub Actions",
  "Testing & Monitoring: Jest, Vitest, Sentry",
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

const scoville: JobDescriptionType = {
  description:
    "Three projects: an AI-powered call center, a video interview platform and an applicant tracking system",
  achievements: [
    "Led the front-end of an AI-powered call center SPA, significantly improving agent efficiency; now tech lead with full ownership across front-end, back-end and infrastructure",
    "Enabled agents to track missed inbound calls, schedule callbacks and manage campaigns; improved read performance with a DocumentDB read replica",
    "Enabled recruiters to bulk-invite candidates, track invitation status and review post-interview feedback through a company-side portal; platform deployed serverless via SST on Lambda",
    "Enabled recruiters to manage job applications and positions through a GraphQL-powered interface; built the candidate email pipeline supporting inbound parsing and document uploads to S3",
    "Automated deployments across 10+ microservices via Terraform, CDK and GitHub Actions on AWS",
  ],
};

const shipandco: JobDescriptionType = {
  description: "Web app to compare shipping rates and create shipping labels",
  achievements: [
    "Enabled merchants to compare rates and create labels via Shopify, DHL and Yamato integrations",
    "Allowed merchants to schedule parcel pick-ups and request GDPR-compliant personal data erasure",
    "Launched a new subscription pricing model with Stripe",
  ],
};

const jobs: JobItemType[] = [
  {
    company: "Scoville",
    yearStart: "May 2021",
    jobTitle: "Full-stack web engineer, Kyoto",
    jobDescription: [scoville],
  },
  {
    company: "Ship&co",
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
  "Python, Rust and Swift — foundational knowledge, able to contribute and ramp up quickly",
  "Alumnus of Board of European Students of Technology",
];

const IndexPage: React.FunctionComponent<PageProps<DataProps>> = (props) => {
  const [pageBreakClass, setPageBreakClass] = useState("page-break");
  const [isBot, setIsBot] = useState(false);
  const [_isSafari, setIsSafari] = useState(false); // used to generate page breaks for print medium

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
