import { combineReducers } from 'redux';
import { events } from './events.reducer';
import { calendar } from './calendar.reducer';

const rootReducer = combineReducers({
    events,
    calendar
});

export default rootReducer;
