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
          className="mb-3 cursor-pointer rounded-sm bg-[#f2f2f2] px-2 py-1 text-xl print:hidden dark:bg-zinc-800"
          onClick={() => setShowNumber(true)}
        >
          Phone number
        </button>
      )}
      <p
        className={
          showNumber
            ? "mb-3 text-base print:mb-0 print:text-[0.75rem] print:leading-[1.45rem] sm:text-xl"
            : "mb-3 hidden text-base print:mb-0 print:block print:text-[0.75rem] print:leading-[1.45rem] sm:text-xl"
        }
      >
        {phone}
      </p>
    </>
  );
};

export default Phone;
