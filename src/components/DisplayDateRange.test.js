import React from "react";
import { shallow, mount } from "enzyme";
import DisplayDateRange from "./DisplayDateRange";

describe("DisplayDateRange component", () => {
    let component, mountedComponent;
    const referenceDate = new Date();

    beforeEach(() => {
        component = shallow(
            <DisplayDateRange
                referenceDate={referenceDate}
            />,
        );

        mountedComponent = mount(
            <DisplayDateRange
                referenceDate={referenceDate}
            />,
        );
    });

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Should render a div with className DisplayDateRange which contains text', () => {
        expect(component.find('div.DisplayDateRange').html().length).toBeGreaterThan(0);
    });
});