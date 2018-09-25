import React from "react";
import PropTypes from "prop-types";
import CalendarDaysHeader from "./CalendarDaysHeader";
import CalendarGrid from "./CalendarGrid";

class Calendar extends React.Component {
	render() {
		return (
			<div className="Calendar">
				<CalendarDaysHeader currentMonth={ this.props.currentMonth }/>
				<CalendarGrid events={ this.props.currentMonthEvents }/>
			</div>
		);
	}
}

Calendar.propTypes = {
    selectedDate: PropTypes.instanceOf(Date),
    currentYear: PropTypes.number,
	currentMonth: PropTypes.number,
    currentMonthEvents: PropTypes.array
};

export default Calendar;
