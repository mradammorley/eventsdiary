import React from 'react';
import Toolbar from './Toolbar';
import Calendar from './Calendar';
import Legend from './Legend';
import BookingsHeader from './BookingsHeader';
import Bookings from './Bookings';

const today = new Date();

class App extends React.Component {
    state = {
    	displayDate: today
    };
    render () {
	    return (
	    	<div className='App'>
			    <Toolbar/>
			    <Calendar/>
			    <Legend/>
			    <BookingsHeader/>
			    <Bookings/>
		    </div>
        )
    }
}

export default App;
