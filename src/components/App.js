import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import {eventsActions} from "../actions/events.action";
import {connect} from "react-redux";
import Toolbar from "./Toolbar";
import Calendar from "./Calendar";
import Legend from "./Legend";
import BookingsHeader from "./BookingsHeader";
import Bookings from "./Bookings";

class App extends React.Component {

    componentDidMount() {
		this.props.dispatch(eventsActions.refreshEvents());
        let currentMonthEvents = this.getEventsForCurrentMonth(this.props.eventData, this.props.calendar.currentYear, this.props.calendar.currentMonth);
        this.setState({currentMonthEvents: currentMonthEvents});
    }

    getEventsForCurrentMonth = (events, currentYear, currentMonth) => {
        return _.filter(events, {"year": currentYear, "month": currentMonth});
    };

    render() {
        return (
            <div className='App'>
                <Toolbar/>
                <Calendar
                    selectedDate={this.props.calendar.selectedDate}
                    currentMonth={this.props.calendar.currentMonth}
                    currentYear={this.props.calendar.currentYear}
                    currentMonthEvents={this.props.calendar.currentMonthEvents}/>
                <Legend/>
                <BookingsHeader/>
                <Bookings/>
            </div>
        );
    }
}

App.propTypes = {
    eventData: PropTypes.object,
    calendar: PropTypes.object,
    dispatch: PropTypes.func
};

const mapStateToProps = (store) => {
    return {
        calendar: store.calendar,
        events: store.events,
        dispatch: store.dispatch
    };
};

export default connect(mapStateToProps)(App);
