import {
  EducationItemType,
  CompetencyItemType,
  JobDescriptionType,
  JobItemType,
} from "@typedefs/propTypes";

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
  { label: "Test & Monitor", description: "Jest, Vitest, Sentry" },
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

const previewData = {
  name: personalDetails.name,
  jobTitle: "Senior Full-Stack Engineer",
  url: "https://vtrofin.github.io",
  location: { city: "Kyoto", country: "JP" },
  organization: jobs[0].company,
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "GraphQL",
    "AWS",
    "Terraform",
    "Docker",
  ],
};

export {
  education,
  jobs,
  personalDetails,
  skills,
  technicalSkills,
  previewData,
};
