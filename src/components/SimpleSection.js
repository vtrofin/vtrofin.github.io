import React from 'react';

const SimpleSection = (props) => {
	return (
		<div className='simpleSection'>
			<ul>
				{props.content.map((item, index) => 
					<li key={index}>{item}</li>
				)}
			</ul>
		</div>
	)
}

export default SimpleSection;