import React from 'react';

const Photo = props => (
  <div className="profilePic">
    <img
      title="profile picture"
      alt="Victor Trofin full stack web engineer in Kyoto, Japan"
      src={props.src}
      loading="lazy"
    />
  </div>
);

export default Photo;
