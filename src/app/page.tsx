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

export default function Page() {
  const email = process.env.EMAIL?.trim() ?? "";
  const phone = process.env.PHONE?.trim() ?? "";
  if (!email || !phone) {
    throw new Error("Set EMAIL and PHONE before building the CV");
  }

  return (
    <main className="mx-auto mt-12 max-w-4xl px-4 pb-6 print:m-0 print:px-[1.0875rem] print:py-0">
      <div className="mb-2 flex items-center justify-between gap-4 print:hidden">
        <ThemeToggle />
        <p className="font-sans text-xs leading-none text-[#888] dark:text-zinc-400">
          Viewing Victor&apos;s CV —{" "}
          <a
            className="pdf-default text-[#555] dark:text-zinc-300"
            href="/cv.pdf"
            download="Victor_Trofin_CV.pdf"
          >
            download as PDF
          </a>
          <a
            className="pdf-western text-[#555] dark:text-zinc-300"
            href="/cv-western.pdf"
            download="Victor_Trofin_CV_Western.pdf"
          >
            download as PDF
          </a>
        </p>
      </div>
      <GeneralDetails
        personalDetails={{ ...personalDetails, email, phone }}
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
