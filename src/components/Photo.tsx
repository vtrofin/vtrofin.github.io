import React from "react";

const Photo: React.FunctionComponent<{ src: string }> = ({ src }) => (
  <div className="profilePic">
    <img
      title="profile picture"
      alt="Victor Trofin full stack web engineer in Kyoto, Japan"
      src={src}
      loading="lazy"
    />
  </div>
);

export default Photo;
