import React from "react";
import Phone from "./Phone";
import Photo from "./Photo";
import profilePic from "../images/victor_light_yellow.jpg";
import githubIco from "../images/ico-github.svg";
import envelope from "../images/envelope.svg";
import { PersonalDetailsType } from "@typedefs/propTypes";
import { getAge } from "../utils/dateUtils";

// western type cv will remove the Japanese required age, marital status, etc.
const GeneralDetails: React.FunctionComponent<{
  personalDetails: PersonalDetailsType;
  western?: boolean;
}> = ({ personalDetails, western = false }) => {
  const { name, email, phone, status: propStatus, location } = personalDetails;
  const status = propStatus ?? `Romanian national living in ${location}`;

  return (
    <header className="generalDetails">
      <div className="generalText">
        <h1>{name}</h1>
        <h3>トロフィン ビクトル</h3>
        <p className="status-line">{status}</p>
        {!western && <p>Married, one child &nbsp;|&nbsp; Age: {getAge()}</p>}
        <Phone phone={phone} />
        <p className="paper-email">{email}</p>
        <div className="contacts">
          <a href={`mailto:${email}`} target="_top">
            <img src={envelope} alt="email" id="envelope-icon" loading="lazy" />
          </a>
          <a href="https://github.com/vtrofin">
            <img
              src={githubIco}
              alt="github profile"
              id="git-icon"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <Photo src={profilePic} />
    </header>
  );
};

export default GeneralDetails;
