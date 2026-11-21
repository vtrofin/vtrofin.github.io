import JobItem from "@components/JobItem";
import SectionSubtitle from "@components/SectionSubtitle";
import { JobItemType } from "@typedefs/propTypes";

const EmploymentSection = ({
  jobs,
  subtitleText,
}: {
  jobs: JobItemType[];
  subtitleText: string;
}) => (
  <section>
    <SectionSubtitle subtitleText={subtitleText} />
    <ul className="ml-2 list-none">
      {jobs.map((jobItem) => (
        <JobItem key={jobItem.company + jobItem.yearStart} jobItem={jobItem} />
      ))}
    </ul>
  </section>
);

export default EmploymentSection;
