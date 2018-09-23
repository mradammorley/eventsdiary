import calendarConstants from "../constants/calendar.constants";

const today = new Date();

const initialState = {
    selectedDate: today,
    currentMonth: today.getMonth(),
    currentYear: today.getFullYear(),
    currentMonthEvents: []
};

export function calendar(state = initialState, action) {
    switch (action.type) {
        case calendarConstants.CHANGE_DATE_RANGE:
            console.log(action.payload);
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}