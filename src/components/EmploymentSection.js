import React from 'react';
import JobItem from './JobItem';

const EmploymentSection = (props) => (
	<div className='employmentSection'>
		<ul className='jobsUl'>
			{props.jobs.map((jobItem, index) => (
				<JobItem key={index} jobItem={jobItem}/>
			))}
		</ul>
	</div>
)

export default EmploymentSection;