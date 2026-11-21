"use client";

import { useEffect, useState } from "react";

const Phone = ({ phone = "" }: { phone: string }) => {
  const [showNumber, setShowNumber] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!showNumber) {
      setVisible(false);
      return;
    }
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setVisible(true));
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [showNumber]);

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
        className={`text-base transition duration-300 ease sm:text-xl print:mb-0 print:block print:scale-100 print:text-[0.75rem] print:leading-[1.45rem] print:opacity-100 ${
          showNumber
            ? visible
              ? "mb-3 scale-100 opacity-100"
              : "mb-3 scale-90 opacity-0"
            : "hidden"
        }`}
      >
        {phone}
      </p>
    </>
  );
};

export default Phone;
