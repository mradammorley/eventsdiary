import {eventsService} from "../services/events.service";
import eventsConstants from "../constants/events.constants";

const refreshEvents = () => {
    return dispatch => {
        eventsService.refreshEvents()
            .then(
                response => {
                    dispatch(success(response.data.data));
                },
                error => {
                    dispatch(failure(error.status));
                }
            );
    }

    function success(data) {
        return {type: eventsConstants.REFRESH_EVENTS_SUCCESS, payload: data};
    }

    function failure(error) {
        return {type: eventsConstants.REFRESH_EVENTS_FAILURE, error};
    }
};

export const eventsActions = {
    refreshEvents
};