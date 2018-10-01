import eventsConstants from "../constants/events.constants";

const initialState = {};

export function events(state = initialState, action) {
    switch (action.type) {
        case eventsConstants.REFRESH_EVENTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}