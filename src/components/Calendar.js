import React from "react";
import PropTypes from "prop-types";
import CalendarDaysHeader from "./CalendarDaysHeader";
import CalendarGrid from "./CalendarGrid";

class Calendar extends React.Component {


	render() {
		return (
			<div className="Calendar">
				<CalendarDaysHeader currentMonth={ this.props.currentMonth }/>
				<CalendarGrid currentMonth={ this.props.currentMonth } selectedDate={ this.props.selectedDate } events={ this.props.currentMonthEvents }/>

			</div>
		);
	}
}

Calendar.propTypes = {
    selectedDate: PropTypes.instanceOf(Date),
    currentYear: PropTypes.instanceOf(Date),
	currentMonth: PropTypes.instanceOf(Date),
    currentMonthEvents: PropTypes.array
};

export default Calendar;
