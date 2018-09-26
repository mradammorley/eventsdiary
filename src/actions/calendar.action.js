import calendarConstants from "../constants/calendar.constants";

const gotoMonth = (month, year) => {
    return { type: calendarConstants.CHANGE_DATE_RANGE, payload: {currentMonth: month, currentYear: year}};
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

export const calendarActions = {
    gotoMonth,
    gotoYear,
    gotoNextMonth,
    gotoPreviousMonth,
    gotoNextYear,
    gotoPreviousYear
};