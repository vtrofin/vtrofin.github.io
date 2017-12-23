import React from 'react';

const EducationItem = (props) => {
	const {yearStart, yearEnd, school} = props.educationItem;

	return (
		<li>
			<div>{school}</div>
			<div>{`${yearStart} - ${yearEnd}`}</div>
		</li>
	)
}

export default EducationItem;