import { JobDescriptionType, JobItemType } from "@typedefs/propTypes";

const LineItem = ({ item }: { item: JobDescriptionType }) => {
  if (typeof item === "string") {
    return (
      <ul className="list-disc pl-5">
        <li>{item}</li>
      </ul>
    );
  }

  const { description, achievements } = item;
  return (
    <div className="py-3 print:py-[0.2rem]">
      <p className="mb-1.5 print:mb-0">{description}</p>
      <ul className="list-disc pl-5">
        {achievements.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

const JobItem = ({ jobItem }: { jobItem: JobItemType }) => {
  const { company, yearStart, yearEnd, city, jobTitle, jobDescription } =
    jobItem;

  return (
    <li className="mt-12 first:mt-0 print:mt-8 print:break-inside-avoid print:first:mt-0">
      <div>
        <div className="flex flex-wrap justify-between gap-1">
          <h3 className="mb-1 font-sans text-xl font-bold leading-tight print:mb-0 print:text-[0.8rem]">
            {company}
          </h3>
          <p className="mb-2 print:mb-0">{`${yearStart} – ${yearEnd ?? ""}`}</p>
        </div>
        {city && <p className="mb-2 italic">{city}</p>}
        {jobTitle ? <p className="mb-2 italic">{jobTitle}</p> : null}
        <div>
          {jobDescription.map((item, i) => (
            <LineItem key={i} item={item} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default JobItem;
