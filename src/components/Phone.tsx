"use client";

import { useEffect, useState } from "react";

const Phone = ({ phone = "" }: { phone: string }) => {
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    const show = () => setShowNumber(true);
    const hide = () => setShowNumber(false);
    window.addEventListener("beforeprint", show);
    window.addEventListener("afterprint", hide);
    return () => {
      window.removeEventListener("beforeprint", show);
      window.removeEventListener("afterprint", hide);
    };
  }, []);

  return (
    <>
      {!showNumber && (
        <button
          type="button"
          className="mb-[0.7rem] cursor-pointer rounded-[3px] bg-[#f2f2f2] px-2 py-[0.2rem] text-[1.3rem] print:hidden dark:bg-zinc-800"
          onClick={() => setShowNumber(true)}
        >
          Phone number
        </button>
      )}
      <p
        className={
          showNumber
            ? "mb-[0.7rem] text-[clamp(1rem,3.5vw,1.3rem)] print:mb-0 print:text-[0.75rem] print:leading-[1.45rem]"
            : "mb-[0.7rem] hidden text-[clamp(1rem,3.5vw,1.3rem)] print:block print:mb-0 print:text-[0.75rem] print:leading-[1.45rem]"
        }
      >
        {phone}
      </p>
    </>
  );
};

export default Phone;
