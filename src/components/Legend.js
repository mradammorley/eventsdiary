import React from 'react';

const Legend = ({venue}) => {
	return (
		<div className='Legend'>
			<ul>
				<li><span className='box boxNothing'>"bookerShort"</span> "bookerName"</li>
				<li><span className='box boxProvisional'></span> Provisional Hold</li>
				<li><span className='box boxProbable'></span> Pending Conf</li>
				<li><span className='box boxBooked'></span> Confirmed Event</li>
			</ul>
		</div>
	);
};

export default Legend;