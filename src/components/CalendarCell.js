import React from "react";
import PropTypes from "prop-types";

class CalendarCell extends React.Component  {
	render() {
		return (
			<div className = {`CalendarCell ${ this.props.isInCurrentMonth ? "active" : "inactive" } ${
				this.props.isSelectedDate ? "selected" : "" } `}>
				{ this.props.dayOfMonth + 1 }
				{ this.props.eventsOnDay }
			</div>
		);

	}

}

CalendarCell.propTypes = {
	isInCurrentMonth: PropTypes.bool,
	isSelectedDate: PropTypes.bool,
	eventsOnDay: PropTypes.array,
	dayOfMonth: PropTypes.number


};

export default CalendarCell;
