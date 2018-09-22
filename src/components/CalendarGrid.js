import React from "react";
import dateFns from "date-fns";
import PropTypes from "prop-types";
import CalendarCell from "./CalendarCell";

class CalendarGrid extends React.Component  {
	constructor (props) {
		super(props);

		this.getMonthOfDays = this.getMonthOfDays.bind(this);
		this.getEventsOnDay = this.getEventsOnDay.bind(this);
	}


	getMonthOfDays () {
		const monthStart = dateFns.startOfMonth(this.props.currentMonth);
		const monthEnd = dateFns.endOfMonth(monthStart);
		const startDate = dateFns.startOfWeek(monthStart);
		const endDate = dateFns.endOfWeek(monthEnd);
		let days = [];
		let day = startDate;

		while (day <= endDate) {
			days.push(day);
			day = dateFns.addDays(day, 1);
		}

		return days;
	}

	getEventsOnDay (day) {
		let eventsOnDayBooker = [];
		let eventsOnDay = _.filter(this.props.events, { "day": day.getDate() });
		_.forEach(eventsOnDay, (event) => {
			eventsOnDayBooker.push(event["bookerID"].toString());
		});
		return eventsOnDayBooker;
	}

	render() {

		let monthOfDays = this.getMonthOfDays();
		monthOfDays = monthOfDays.map((day, index) =>  {
			return (
				<CalendarCell
					dayOfMonth={ dateFns.getDate(day) }
					isSelectedDate={ dateFns.isSameDay(this.props.selectedDate, day)   }
					isInCurrentMonth = { dateFns.isSameMonth(this.props.currentMonth, day) }
					eventsOnDay = { this.getEventsOnDay(day) }
					key={ index }
				/>
			);
		});

		return (
			<div className="CalendarGrid">
				{ monthOfDays }
			</div>
		);

	}

}

CalendarGrid.propTypes = {
	currentMonth: PropTypes.instanceOf(Date),
	selectedDate: PropTypes.instanceOf(Date),
	events: PropTypes.array
};

export default CalendarGrid;

