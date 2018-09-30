import React from "react";
import PropTypes from "prop-types";

class CalendarCell extends React.Component  {
    constructor (props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.props.onCellClick(this.props.day, this.props.month, this.props.year);
    }

	render() {
		return (
			<div
				className = {`CalendarCell ${ this.props.isInCurrentMonth ? "active" : "inactive" } ${
				this.props.isSelectedDate ? "selected" : "" } ${this.props.isToday ? "today" : "" } `}
				onClick={this.clickHandler}
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
	onCellClick: PropTypes.func
};

export default CalendarCell;
