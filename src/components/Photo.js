import React from 'react';

const Photo = props => (
  <div className="profilePic">
    <img title="profile picture" alt="" src={props.src} />
  </div>
);

export default Photo;
