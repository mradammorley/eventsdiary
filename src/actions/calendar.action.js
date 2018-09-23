import calendarConstants from "../constants/calendar.constants";

function gotoNextMonth() {
    return { type: calendarConstants.CHANGE_DATE_RANGE, payload: { currentMonth: 3 }};
}

export const calendarActions = {
    gotoNextMonth
};