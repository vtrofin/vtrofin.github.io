import React from 'react';
import EducationItem from './EducationItem';

const EducationSection = (props) => (
	<div>
		<ul>
			{props.education.map((educationItem, index) => (
				<EducationItem key={index} educationItem={educationItem} />
			))}
		</ul>
	</div>
)

export default EducationSection;