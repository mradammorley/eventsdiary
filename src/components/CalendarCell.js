import React from "react";
import PropTypes from "prop-types";

class CalendarCell extends React.Component  {

	render() {
		return (
			<div
				className = {`CalendarCell ${ this.props.isInCurrentMonth ? "active" : "inactive" } ${
				this.props.isSelectedDate ? "selected" : "" } ${this.props.isToday ? "today" : "" } `}
				onClick={this.props.clickHandler}
				data-day={this.props.day}
                data-month={this.props.month}
                data-year={this.props.year}
			>
                <div className="day">{ this.props.day }</div>
				{ this.props.eventsOnDay }
			</div>
		);

	}

}

CalendarCell.propTypes = {
	isInCurrentMonth: PropTypes.bool,
	isSelectedDate: PropTypes.bool,
    isToday: PropTypes.bool,
	eventsOnDay: PropTypes.array,
	day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
	clickHandler: PropTypes.func



};

export default CalendarCell;
