const Photo = ({ src }: { src: string }) => (
  <div className="my-[1.875rem] shrink-2 text-center min-[600px]:mt-0 min-[600px]:shrink-3 print:m-0 print:shrink-3">
    <img
      title="profile picture"
      alt="Victor Trofin full stack web engineer in Kyoto, Japan"
      src={src}
      loading="lazy"
      className="mb-[0.7rem] rounded-[2%] print:mb-0 print:w-4/5"
    />
  </div>
);

export default Photo;
