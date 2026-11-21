const SectionSubtitle = ({ subtitleText }: { subtitleText: string }) => (
  <div className="mb-5 mt-[clamp(1.875rem,5vw,4.0625rem)] border-b border-[#c1c1c1] uppercase print:mb-4 print:mt-8 dark:border-zinc-600">
    <h2 className="indent-[0.625rem] font-sans text-base font-bold leading-[1.1] min-[375px]:text-[1.1rem] min-[414px]:text-[1.2rem] min-[600px]:text-[1.3rem] print:text-base">
      {subtitleText}
    </h2>
  </div>
);

export default SectionSubtitle;
