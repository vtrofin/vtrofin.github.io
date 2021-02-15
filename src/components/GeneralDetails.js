import React from 'react';
import { differenceInYears } from 'date-fns';
import Photo from './Photo';
import profilePic from '../images/victor.jpg';
import githubIco from '../images/ico-github.svg';
import envelope from '../images/envelope.svg';

const getAge = () => {
  const birthdate = new Date('1984-09-05T06:00:00+0200');
  const today = new Date();
  const age = differenceInYears(today, birthdate);
  if (isNaN(age)) {
    // date fns seems to fail in safari
    const month = today.getMonth() + 1;
    const day = today.getDay();
    const safariAge = today.getFullYear() - 1984;
    return month >= 9 && day >= 5 ? safariAge : safariAge - 1;
  }
  return age;
};

const GeneralDetails = props => {
  const { name, location, email, phone } = props.personalDetails;
  return (
    <div className="generalDetails">
      <div className="generalText">
        <h1>{name}</h1>
        <h3>トロフィン ビクトル</h3>
        <p>Romanian national living in {location}</p>
        <p>Married, one child</p>
        <p>Age: {getAge()}</p>
        <p>{phone}</p>
        <div className="contacts">
          <a href={`mailto:${email}`} target="_top">
            <img src={envelope} alt="email" id="envelope-icon" />
          </a>
          <a href="https://github.com/vtrofin">
            <img src={githubIco} alt="github profile" id="git-icon" />
          </a>
        </div>
      </div>
      <Photo src={profilePic} />
    </div>
  );
};

export default GeneralDetails;
