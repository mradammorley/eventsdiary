import React from 'react';
import Utils from '../Utils';

import DisplayDateRange from './DisplayDateRange';

const _utils = new Utils;

const DateRangeSelector = () => {
	// renderHeader() {
	// 	const dateFormat = "MMMM YYYY";
	//
	// 	return (
	// 		<div className="header row flex-middle">
	// 			<div className="col col-start">
	// 				<div className="icon" onClick={this.prevMonth}>
	// 					chevron_left
	// 				</div>
	// 			</div>
	// 			<div className="col col-center">
	// 				<span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
	// 			</div>
	// 			<div className="col col-end" onClick={this.nextMonth}>
	// 				<div className="icon">chevron_right</div>
	// 			</div>
	// 		</div>
	// 	);
	// }
	//
	// onDateClick = day => {
	// 	this.setState({
	// 		selectedDate: day
	// 	});
	// };
	//
	// nextMonth = () => {
	// 	this.setState({
	// 		currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
	// 	});
	// };
	//
	// prevMonth = () => {
	// 	this.setState({
	// 		currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
	// 	});
	// };

	return (
		<div className='DateRangeSelector'>
			Selector
		</div>
	);
};

export default DateRangeSelector;
