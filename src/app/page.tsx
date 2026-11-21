import About from "@components/About";
import CompetencyGrid from "@components/CompetencyGrid";
import EducationSection from "@components/EducationSection";
import EmploymentSection from "@components/EmploymentSection";
import GeneralDetails from "@components/GeneralDetails";
import { ThemeToggle } from "@components/ThemeToggle";
import {
  education,
  jobs,
  personalDetails,
  skills,
  technicalSkills,
} from "@/data";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ western?: string }>;
}) {
  const params = await searchParams;
  const western = params.western === "true";
  const email = process.env.EMAIL ?? "";
  const phone = process.env.PHONE ?? "";

  return (
    <main className="mx-auto mt-[50px] max-w-[960px] px-[1.0875rem] pb-[1.45rem] print:m-0 print:p-0">
      <div className="mb-2 flex items-start justify-between gap-4">
        <p className="ml-auto font-sans text-[0.8rem] text-[#888] print:hidden dark:text-zinc-400">
          Viewing Victor&apos;s CV —{" "}
          <a
            className="text-[#555] dark:text-zinc-300"
            href={western ? "/cv-western.pdf" : "/cv.pdf"}
            download={
              western ? "Victor_Trofin_CV_Western.pdf" : "Victor_Trofin_CV.pdf"
            }
          >
            download as PDF
          </a>
        </p>
        <ThemeToggle />
      </div>
      <GeneralDetails
        personalDetails={{ ...personalDetails, email, phone }}
        western={western}
      />
      <About />
      <CompetencyGrid items={skills} subtitleText="Abilities" />
      <CompetencyGrid items={technicalSkills} subtitleText="Technical Skills" />
      <EmploymentSection jobs={jobs} subtitleText="Employment history" />
      {/* <div className={"page-break" + " bottom"} /> */}
      <EducationSection education={education} subtitleText="Education" />
    </main>
  );
}
