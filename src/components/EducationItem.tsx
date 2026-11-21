import { EducationItemType } from "@typedefs/propTypes";

const EducationItem = ({
  educationItem,
}: {
  educationItem: EducationItemType;
}) => {
  const { yearStart, yearEnd, school } = educationItem;

  return (
    <li>
      <div className="flex flex-wrap justify-between">
        <div>{school}</div>
        <div>{`${yearStart} - ${yearEnd}`}</div>
      </div>
    </li>
  );
};

export default EducationItem;
