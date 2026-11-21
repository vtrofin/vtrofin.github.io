const Photo = ({ src }: { src: string }) => (
  <div className="my-8 shrink-2 text-center print:m-0 print:shrink-3 sm:mt-0 sm:shrink-3">
    <img
      title="profile picture"
      alt="Victor Trofin full stack web engineer in Kyoto, Japan"
      src={src}
      loading="lazy"
      className="mb-3 rounded print:mb-0 print:w-4/5"
    />
  </div>
);

export default Photo;
