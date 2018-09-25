import React from "react";
import {shallow, mount} from "enzyme";
import CalendarGrid from "./CalendarGrid";
import CalendarCell from "./CalendarCell";


describe("CalendarGrid", () => {

    const calendar = mount(
        <CalendarGrid
            store={store}
            events={[
                {
                    "eventID": 1,
                    "month": 8,
                    "day": 3,
                    "year": 2018,
                    "eventTitle": "Event number one",
                    "eventText": "Event number one text",
                    "dateEntered": "30/03/2017 by AM",
                    "bookerID": 9,
                    "booked": 0
                },
                {
                    "eventID": 2,
                    "month": 8,
                    "day": 15,
                    "year": 2018,
                    "eventTitle": "Event number two",
                    "eventText": "Event number two text",
                    "dateEntered": "30/03/2017 by AM",
                    "bookerID": 9,
                    "booked": 0
                },
                {
                    "eventID": 3,
                    "month": 8,
                    "day": 2,
                    "year": 2018,
                    "eventTitle": "Event number three",
                    "eventText": "Event number three text",
                    "dateEntered": "31/03/2017 by AM",
                    "bookerID": 9,
                    "booked": 1
                }
            ]}/>).dive();

    it("renders 1 calendar grid", () => {
        expect(calendar).toHaveLength(1);
    });

    it("renders props correctly", () => {
        expect(calendar.instance().props.currentMonth).toBe(8);
    });

    it("renders 42 days", () => {
        expect(calendar.find(".CalendarGrid").children()).toHaveLength(42);
    });

    it("renders 31 active days", () => {
        expect(calendar.find(".CalendarGrid").children().find(".CalendarCell.active")).toHaveLength(31);
    });

});
