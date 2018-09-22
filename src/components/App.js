import React from 'react';
import Toolbar from './Toolbar';
import Calendar from './Calendar';
import Legend from './Legend';
import BookingsHeader from './BookingsHeader';
import Bookings from './Bookings';
import PropTypes from "prop-types";
import _ from "lodash";

const today = new Date();

class App extends React.Component {
	constructor(props) {
		super(props);

        this.state = {
            selectedDate: today,
            currentMonth: today.getMonth(),
            currentYear: today.getFullYear(),
            currentMonthEvents: []
        };
	}

	componentDidMount() {
		let currentMonthEvents = this.getEventsForCurrentMonth(this.props.eventData, this.state.currentYear, this.state.currentMonth);
        this.setState({ currentMonthEvents: currentMonthEvents });
	}

    getEventsForCurrentMonth = (events, currentYear, currentMonth) => {
        return _.filter(events, { "year": currentYear, "month": currentMonth });
    };

    render () {
		return (
			<div className='App'>
				<Toolbar/>
				<Calendar
                    selectedDate = { this.state.selectedDate }
                    currentMonth = { this.state.currentMonth }
                    currentYear = { this.state.currentYear }
					currentMonthEvents = { this.state.currentMonthEvents }/>
				<Legend />
				<BookingsHeader/>
				<Bookings />
			</div>
        );
    }
}

App.propTypes = {
	data: PropTypes.object
};

export default App;
