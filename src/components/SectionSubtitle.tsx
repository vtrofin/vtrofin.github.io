const SectionSubtitle = ({ subtitleText }: { subtitleText: string }) => (
  <div className="mb-5 mt-8 border-b border-[#c1c1c1] uppercase print:mb-4 print:mt-8 sm:mt-16 dark:border-zinc-600">
    <h2 className="indent-2.5 font-sans text-base font-bold leading-tight print:text-base sm:text-xl">
      {subtitleText}
    </h2>
  </div>
);

export default SectionSubtitle;
