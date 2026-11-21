import EducationItem from "@components/EducationItem";
import SectionSubtitle from "@components/SectionSubtitle";
import { EducationItemType } from "@typedefs/propTypes";

const EducationSection = ({
  education,
  subtitleText,
}: {
  education: EducationItemType[];
  subtitleText: string;
}) => (
  <section>
    <SectionSubtitle subtitleText={subtitleText} />
    <ul className="list-disc pl-5">
      {education.map((educationItem) => (
        <EducationItem
          key={educationItem.school}
          educationItem={educationItem}
        />
      ))}
    </ul>
  </section>
);

export default EducationSection;
