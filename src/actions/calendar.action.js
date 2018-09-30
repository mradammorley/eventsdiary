import calendarConstants from "../constants/calendar.constants";
import {eventsService} from "../services/events.service";

const gotoDay = (date) => {
    return { type: calendarConstants.CHANGE_DATE_RANGE, payload: {selectedDate: date}};
};

const gotoMonth = (month, year) => {
    return dispatch => {
        dispatch({ type: calendarConstants.CHANGE_DATE_RANGE, payload: {currentMonth: month, currentYear: year}});
        dispatch(calendarActions.refreshMonthOfEvents(month, year));
    };
};

const gotoYear = (year) => {
    return { type: calendarConstants.CHANGE_DATE_RANGE, payload: {currentYear: year}};
};

const gotoNextMonth = (currentMonth, currentYear) => {
    let nextMonth;
    let endOfYearReached = false;
    (currentMonth >= 11) ? endOfYearReached = true : nextMonth = currentMonth + 1;
    if (endOfYearReached) {
        currentYear++;
        nextMonth = 0;
    }
    return { type: calendarConstants.CHANGE_DATE_RANGE, payload: {currentMonth: nextMonth, currentYear: currentYear}};
};

const gotoPreviousMonth = (currentMonth, currentYear) => {
    let previousMonth;
    let startOfYearReached = false;
    (currentMonth <= 0) ? startOfYearReached = true : previousMonth = currentMonth - 1;
    if (startOfYearReached) {
        currentYear--;
        previousMonth = 11;
    }
    return { type: calendarConstants.CHANGE_DATE_RANGE, payload: {currentMonth: previousMonth, currentYear: currentYear}};
};

const gotoNextYear = (currentYear) => {
    return { type: calendarConstants.CHANGE_DATE_RANGE, payload: {currentYear: ++currentYear}};
};

const gotoPreviousYear = (currentYear) => {
    return { type: calendarConstants.CHANGE_DATE_RANGE, payload: {currentYear: --currentYear}};
};

const refreshMonthOfEvents = (month, year) => {
    return dispatch => {
        eventsService.refreshMonthOfEvents()
    };
};

export const calendarActions = {
    gotoDay,
    gotoMonth,
    gotoYear,
    gotoNextMonth,
    gotoPreviousMonth,
    gotoNextYear,
    gotoPreviousYear,
    refreshMonthOfEvents
};