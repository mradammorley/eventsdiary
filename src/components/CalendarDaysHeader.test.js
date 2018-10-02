import React from "react";
import { shallow, mount } from "enzyme";
import CalendarDaysHeader from "./CalendarDaysHeader";

describe("CalendarDaysHeader component", () => {
    let component, mountedComponent;
    const referenceDate = 8;

    beforeEach(() => {
        component = shallow(
            <CalendarDaysHeader
                currentMonth={referenceDate}
            />,
        );

        mountedComponent = mount(
            <CalendarDaysHeader
                currentMonth={referenceDate}
            />,
        );
    });

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Should render a div with className CalendarDaysHeader which has 7 children', () => {
        expect(component.find('div.CalendarDaysHeader').children()).toHaveLength(7);
    });
});