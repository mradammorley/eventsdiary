import calendarConstants from "../constants/calendar.constants";

const gotoNextMonth = (currentMonth) =>{
    let nextMonth;
    (currentMonth >= 11) ? nextMonth = 0 : nextMonth = currentMonth + 1;
    return { type: calendarConstants.CHANGE_DATE_RANGE, payload: { currentMonth: nextMonth }};
};

export const calendarActions = {
    gotoNextMonth
};