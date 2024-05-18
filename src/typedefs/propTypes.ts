interface EducationItemType {
  yearStart: string;
  yearEnd: string;
  school: string;
}

interface PersonalDetailsType {
  name: string;
  location: string;
  email: string;
  phone: string;
}

type JobDescriptionType =
  | string
  | { description: string; achievements: string[] };

interface JobItemType {
  company: string;
  yearStart: string;
  yearEnd?: string;
  city?: string;
  jobTitle: string;
  jobDescription: JobDescriptionType[];
}

export type {
  EducationItemType,
  PersonalDetailsType,
  JobDescriptionType,
  JobItemType,
};
