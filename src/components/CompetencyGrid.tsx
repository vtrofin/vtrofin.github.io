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
    <div className="mb-6 flex flex-col gap-1.5 print:mb-2 print:gap-[0.15rem]">
      {items.map(({ label, description }) => (
        <div
          key={label}
          className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-baseline sm:gap-2.5"
        >
          <strong className="min-w-0 shrink-0 font-sans text-lg sm:min-w-40 print:text-[0.75rem]">
            {label}
          </strong>
          <span className="text-lg leading-snug print:text-[0.75rem]">
            {description}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default CompetencyGrid;
