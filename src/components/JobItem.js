import React from 'react';


const JobItem = (props) => {
	const { company, yearStart, yearEnd, city, jobTitle, jobDescription } = props.jobItem;

	return (
		<li className='liJobItem'>
			<div className='jobItem'>
				<div className='jobItemFirstLine'>
					<h3>{company}</h3>
					<p>{`${yearStart} - ${yearEnd}`}</p>
				</div>
				<p style={{fontStyle: 'italic'}}>{city}</p>
				<p>{jobTitle}</p>
				<div>
					<ul className='jobItemUl'>
						{jobDescription.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</li>
	)
}

export default JobItem;