import {eventsService} from "../services/events.service";
import eventsConstants from "../constants/events.constants";

const refreshEvents = () => {
    return dispatch => {
        eventsService.refreshEvents()
            .then(
                response => {
                    dispatch(success(response.data));
                },
                error => {
                    dispatch(failure(error.status));
                }
            );
    }

    function success(data) {
        console.log(eventsConstants.REFRESH_EVENTS_SUCCESS);
        return {type: eventsConstants.REFRESH_EVENTS_SUCCESS, data};
    }

    function failure(error) {
        return {type: eventsConstants.REFRESH_EVENTS_FAILURE, error};
    }
};

export const eventsActions = {
    refreshEvents
};