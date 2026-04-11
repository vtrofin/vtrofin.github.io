import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import GeneralDetails from "@components/GeneralDetails";
import About from "@components/About";
import CompetencyGrid from "@components/CompetencyGrid";
import EducationSection from "@components/EducationSection";
import EmploymentSection from "@components/EmploymentSection";
import {
  EducationItemType,
  CompetencyItemType,
  JobDescriptionType,
  JobItemType,
  DataProps,
} from "@typedefs/propTypes";
import type { PageProps } from "gatsby";

const personalDetails = {
  name: "Victor Trofin",
  location: "Kyoto, Japan",
  status: "Full-stack engineer · Scoville · Kyoto, Japan",
};

const skills: CompetencyItemType[] = [
  {
    label: "Adaptable",
    description:
      "Takes full ownership across the stack — UI, back-end, infrastructure, and DevOps",
  },
  {
    label: "Problem solver",
    description:
      "Tripled call center agent efficiency; tackles root causes over quick fixes",
  },
  {
    label: "Communicator",
    description:
      "Clear documentation and cross-functional collaboration across AI teams",
  },
  {
    label: "Security-conscious",
    description: "Supply chain mitigation, GDPR data erasure, input validation",
  },
  {
    label: "Languages",
    description: "Native Romanian, fluent English, basic Japanese",
  },
];

const technicalSkills: CompetencyItemType[] = [
  { label: "Languages", description: "TypeScript" },
  {
    label: "Front-end",
    description:
      "React, React Router v7, Next.js, Vue.js, Tailwind CSS, shadcn/radix UI, Storybook",
  },
  {
    label: "Back-end & APIs",
    description:
      "Node.js, PostgreSQL, Drizzle ORM, Redis, MongoDB, REST, GraphQL" /* Fastify, Prisma */,
  },
  {
    label: "AWS",
    description:
      "Lambda, Fargate, EventBridge, SQS, S3, SES, Amazon Connect, DocumentDB",
  },
  {
    label: "Infra & DevOps",
    description: "Terraform, CDK, SST, Docker, GitHub Actions",
  },
  { label: "Testing", description: "Jest, Vitest, Sentry" },
  {
    label: "Also used",
    description: "ReScript, Python (professional); Rust, Swift (personal)",
  },
];

const education: EducationItemType[] = [
  {
    yearStart: "2003",
    yearEnd: "2008",
    school:
      "Politehnica University of Bucharest - Faculty of Power Engineering",
  },
  {
    yearStart: "2009",
    yearEnd: "2013",
    school:
      "Bucharest University of Economic Studies - Master in International Business",
  },
];

const scoville: JobDescriptionType = {
  description:
    "Three projects: an AI-powered call center, a video interview platform and an applicant tracking system",
  achievements: [
    "Grew from front-end lead to full-stack tech lead on an AI-powered call center SPA, tripling agent call volume over a spreadsheet-based workflow",
    "Built inbound call tracking, callback scheduling, and campaign management; added DocumentDB read replica for read performance",
    "Delivered recruiter portal for bulk candidate invitations and interview feedback; deployed serverless on Lambda via SST",
    "Built GraphQL-powered ATS for job and application management; engineered email pipeline with inbound parsing and S3 uploads",
    "Automated deployments across 10+ microservices via Terraform, CDK, and GitHub Actions on AWS",
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
    yearEnd: "present",
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
      "Taught English in Kyoto; used the period to transition into full-time web engineering",
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

const IndexPage: React.FunctionComponent<PageProps<DataProps>> = (props) => {
  const isWestern = React.useMemo(
    () => new URLSearchParams(props.location.search).get("western") === "true",
    [props.location.search],
  );
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
      <p className="pdf-hint">
        Viewing Victor&apos;s CV —{" "}
        <a
          href={isWestern ? "/cv-western.pdf" : "/cv.pdf"}
          download={
            isWestern ? "Victor_Trofin_CV_Western.pdf" : "Victor_Trofin_CV.pdf"
          }
        >
          download as PDF
        </a>
      </p>
      <GeneralDetails
        personalDetails={{
          ...personalDetails,
          email: isBot ? "" : props.data.site.siteMetadata.email,
          phone: isBot ? "" : props.data.site.siteMetadata.phone,
        }}
        western={isWestern}
      />
      <About />

      <CompetencyGrid items={skills} subtitleText="Abilities" />

      <CompetencyGrid items={technicalSkills} subtitleText="Technical Skills" />

      <EmploymentSection jobs={jobs} subtitleText="Employment history" />

      <EducationSection education={education} subtitleText="Education" />
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
