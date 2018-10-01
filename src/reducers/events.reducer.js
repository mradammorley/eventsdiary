import eventsConstants from "../constants/events.constants";

const initialState = {};

export function events(state = initialState, action) {

    console.log(action.type, action.payload);
    switch (action.type) {
        case eventsConstants.REFRESH_EVENTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}