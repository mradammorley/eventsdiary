import React from 'react';
import Utils from '../Utils';

const _utils = new Utils;

let dbCurrentdate = new Date();

const DisplayDateRange = () => {
	return (
		<div className='DisplayDateRange'>
			{ _utils.getMonthName(dbCurrentdate) }, { _utils.getYearName(dbCurrentdate) }
		</div>
	)
};

export default DisplayDateRange;
