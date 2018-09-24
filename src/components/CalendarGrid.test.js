// import "raf/polyfill";
//
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
//
// configure({ adapter: new Adapter() });

import "jsdom-global/register";
import React from "react";
import {mount} from "enzyme";
import CalendarGrid from "./CalendarGrid";


describe("CalendarGrid", () => {
    let props;
    let mountedCalendarGrid;
    const calendarGrid = () => {
        if (!mountedCalendarGrid) {
            mountedCalendarGrid = mount(
                <CalendarGrid {...props} />
            );
        }
        return mountedCalendarGrid;
    }

    beforeEach(() => {
        props = {
            currentMonth: undefined,
            currentYear: undefined,
            selectedDate: undefined,
            events: undefined
        };
        mountedCalendarGrid = undefined;
    });

    it("always renders a div", () => {
        const divs = calendarGrid().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });
});
