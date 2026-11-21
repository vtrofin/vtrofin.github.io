import { JobDescriptionType, JobItemType } from "@typedefs/propTypes";

const LineItem = ({ item }: { item: JobDescriptionType }) => {
  if (typeof item === "string") return <li>{item}</li>;

  const { description, achievements } = item;
  return (
    <li className="-ml-[1.45rem] list-none py-[0.7rem] print:py-[0.2rem]">
      {description}
      <ul className="mt-0 list-disc print:mt-0">
        {achievements.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </li>
  );
};

const JobItem = ({ jobItem }: { jobItem: JobItemType }) => {
  const { company, yearStart, yearEnd, city, jobTitle, jobDescription } =
    jobItem;

  return (
    <li className="mt-12 first:mt-0 print:mt-5 print:first:mt-0">
      <div>
        <div className="flex flex-wrap justify-between gap-1">
          <h3 className="mb-1 font-sans text-[1.2rem] font-bold leading-[1.1] print:mb-0 print:text-[0.8rem]">
            {company}
          </h3>
          <p className="mb-[0.45rem] print:mb-0">{`${yearStart} – ${yearEnd ?? ""}`}</p>
        </div>
        {city && <p className="mb-[0.45rem] italic">{city}</p>}
        {jobTitle ? <p className="mb-[0.45rem] italic">{jobTitle}</p> : null}
        <ul className="list-disc">
          {jobDescription.map((item, i) => (
            <LineItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default JobItem;
