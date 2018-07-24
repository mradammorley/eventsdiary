import React from 'react';
import Calendar from './Calendar';

class App extends React.Component {
    state = {
    	calendarMessage: 'my other calendar message'
    };
    render () {
    	return (
    		<Calendar message={this.state.calendarMessage} />
    	);
    }
}

export default App;
