import Phone from "./Phone";
import Photo from "./Photo";
import { PersonalDetailsType } from "@typedefs/propTypes";
import { getAge } from "../utils/dateUtils";

const GeneralDetails = ({
  personalDetails,
}: {
  personalDetails: PersonalDetailsType;
}) => {
  const { name, email, phone, status: propStatus, location } = personalDetails;
  const status = propStatus ?? `Romanian national living in ${location}`;

  return (
    <header className="flex flex-col print:flex-row print:justify-between sm:flex-row sm:justify-between">
      <div className="mb-2 flex flex-col items-start justify-center px-4 print:w-3/4 print:px-5 sm:w-3/4 sm:justify-center sm:px-5">
        <h1 className="mb-6 font-sans text-3xl font-bold leading-tight print:mb-4 print:text-[2rem] sm:text-4xl">
          {name}
        </h1>
        <h3 className="mb-6 font-sans text-2xl font-bold leading-tight print:mb-4 print:text-[1.5rem]">
          トロフィン ビクトル
        </h3>
        <p className="mb-3 font-sans text-base font-semibold text-[#444] dark:text-zinc-300 print:text-[0.75rem] print:leading-[1.45rem]">
          {status}
        </p>
        <p className="family-status mb-3 text-base print:mb-0 print:text-[0.75rem] print:leading-[1.45rem] sm:text-xl">
          Married, one child &nbsp;|&nbsp; Age: {getAge()}
        </p>
        <Phone phone={phone} />
        <p className="mb-3 hidden text-base print:block print:text-[0.75rem] print:leading-[1.45rem] sm:text-xl">
          {email}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-5 print:hidden">
          <a href={`mailto:${email}`} target="_top">
            <img
              src="/images/envelope.svg"
              alt="email"
              id="envelope-icon"
              className="mb-0 size-6 dark:invert"
              loading="lazy"
            />
          </a>
          <a href="https://github.com/vtrofin">
            <img
              src="/images/ico-github.svg"
              alt="github profile"
              id="git-icon"
              className="mb-0 size-6 dark:invert"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <Photo src="/images/victor_light_yellow.jpg" />
    </header>
  );
};

export default GeneralDetails;
