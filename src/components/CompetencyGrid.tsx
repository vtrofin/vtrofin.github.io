import SectionSubtitle from "@components/SectionSubtitle";
import { CompetencyItemType } from "@typedefs/propTypes";

const CompetencyGrid = ({
  items,
  subtitleText,
}: {
  items: CompetencyItemType[];
  subtitleText: string;
}) => (
  <section>
    <SectionSubtitle subtitleText={subtitleText} />
    <div className="mb-[1.45rem] flex flex-col gap-[0.4rem] print:mb-2 print:gap-[0.15rem]">
      {items.map(({ label, description }) => (
        <div
          key={label}
          className="flex items-baseline gap-[0.6rem] max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-[0.15rem]"
        >
          <strong className="min-w-40 shrink-0 font-sans text-[1.1rem] max-[600px]:min-w-0 print:text-[0.75rem]">
            {label}
          </strong>
          <span className="text-[1.1rem] leading-[1.4] print:text-[0.75rem]">
            {description}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default CompetencyGrid;
