import Phone from "./Phone";
import Photo from "./Photo";
import { PersonalDetailsType } from "@typedefs/propTypes";
import { getAge } from "../utils/dateUtils";

const GeneralDetails = ({
  personalDetails,
  western = false,
}: {
  personalDetails: PersonalDetailsType;
  western?: boolean;
}) => {
  const { name, email, phone, status: propStatus, location } = personalDetails;
  const status = propStatus ?? `Romanian national living in ${location}`;

  return (
    <header className="flex flex-col print:flex-row print:justify-between min-[600px]:flex-row min-[600px]:justify-between">
      <div className="mb-2 flex flex-col items-start justify-center px-4 min-[600px]:w-3/4 min-[600px]:justify-center min-[600px]:px-5 print:w-3/4 print:px-5">
        <h1 className="mb-6 font-sans text-[clamp(1.8rem,5vw,2.6rem)] font-bold leading-[1.1] min-[600px]:text-[2.6rem] print:mb-4 print:text-[2rem]">
          {name}
        </h1>
        <h3 className="mb-[1.45rem] font-sans text-[1.38316rem] font-bold leading-[1.1] print:mb-4 print:text-[1.5rem]">
          トロフィン ビクトル
        </h3>
        <p className="mb-[0.7rem] font-sans text-base font-semibold text-[#444] dark:text-zinc-300 print:text-[0.75rem]">
          {status}
        </p>
        {!western && (
          <p className="mb-[0.7rem] text-[clamp(1rem,3.5vw,1.3rem)] min-[600px]:text-[1.3rem] print:mb-0 print:text-[0.75rem]">
            Married, one child &nbsp;|&nbsp; Age: {getAge()}
          </p>
        )}
        <Phone phone={phone} />
        <p className="mb-[0.7rem] hidden text-[clamp(1rem,3.5vw,1.3rem)] print:block print:text-[0.75rem]">
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
