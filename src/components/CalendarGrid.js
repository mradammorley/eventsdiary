import React from "react";
import dateFns from "date-fns";
import PropTypes from "prop-types";
import CalendarCell from "./CalendarCell";
import _ from "lodash";
import {connect} from "react-redux";
import {calendarActions} from "../actions/calendar.action";
import {getThisMonth, getThisYear} from "../helpers/date.helper";

class CalendarGrid extends React.Component  {
	constructor (props) {
		super(props);

        this.gotoDay = this.gotoDay.bind(this);
		this.getMonthOfDays = this.getMonthOfDays.bind(this);
		this.getEventsOnDay = this.getEventsOnDay.bind(this);
	}

	getMonthOfDays (date) {
		const monthStart = dateFns.startOfMonth(date);
		const monthEnd = dateFns.endOfMonth(monthStart);
		const startDate = dateFns.startOfWeek(monthStart, { weekStartsOn: 1 });
		const endDate = dateFns.endOfWeek(monthEnd, { weekStartsOn: 1 });
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

	gotoDay (day, month, year) {
        this.props.dispatch(calendarActions.gotoDay(new Date(year, month, day)));
	}

	render() {
		let referenceDate = new Date(this.props.calendar.currentYear, this.props.calendar.currentMonth);
		let monthOfDays = this.getMonthOfDays(referenceDate);
		monthOfDays = monthOfDays.map((day, index) =>  {
			return (
				<CalendarCell
					day={ dateFns.getDate(day) }
					month={ dateFns.getMonth(day) }
					year={ dateFns.getYear(day) }
					isSelectedDate={ dateFns.isSameDay(this.props.calendar.selectedDate, day) }
                    isToday={ dateFns.isSameDay(new Date(), day) }
					isInCurrentMonth = { dateFns.isSameMonth(referenceDate, day) }
					eventsOnDay = { this.getEventsOnDay(day) }
					onCellClick={ this.gotoDay }
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
    calendar: PropTypes.object,
    events: PropTypes.array,
	dispatch: PropTypes.func
};

const mapStateToProps = (store) => {
    return {calendar: store.calendar};
};

export default connect(mapStateToProps)(CalendarGrid);


