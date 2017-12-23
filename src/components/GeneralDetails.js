import React from 'react';
import Photo from './Photo';
import profilePic from '../images/profilepic.jpg';

const GeneralDetails = (props) => {
	const {name, location, email, phone, age} = props.personalDetails;
	return (
		<div className='generalDetails'>
			<div className='generalText'>
				<h1>{name}</h1>
				<p>{location}</p>
				<p>{phone}</p>
				<p><a href={`mailto:${email}?Subject=Hello%20Victor`} target="_top">Email</a></p>
				<p>Age: {age}</p>
			</div>
			<Photo src={profilePic} />
		</div>
	);

}

export default GeneralDetails;