import React from "react";
import dateFns from "date-fns";
import PropTypes from "prop-types";
import {calendarConfig} from "../config/calendar.config";

class CalendarDaysHeader extends React.Component  {
	render() {
		const dateFormat = calendarConfig.HEADER_DAY_FORMAT;
		const days = [];

		let startDate = dateFns.startOfWeek(this.props.currentMonth, { weekStartsOn: 1 });

		for (let i = 0; i < 7; i++) {
			days.push(
				<div key={i}>
					{dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
				</div>
			);
		}

		return <div className="CalendarDaysHeader">{days}</div>;
	}

}

CalendarDaysHeader.propTypes = {
	currentMonth: PropTypes.number
};

export default CalendarDaysHeader;
