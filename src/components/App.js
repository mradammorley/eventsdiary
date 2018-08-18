import React from 'react';
import Toolbar from './Toolbar';
import Calendar from './Calendar';
import Legend from './Legend';
import BookingsHeader from './BookingsHeader';
import Bookings from './Bookings';

const today = new Date();

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayDate: today
		};
	}

    render () {
	    return (
	    	<div className='App'>
			    <Toolbar/>
			    <Calendar {...this.props.data.event}/>
			    <Legend {...this.props.data.venue}/>
			    <BookingsHeader/>
			    <Bookings {...this.props.data.event}/>
		    </div>
        )
    }
}

export default App;
