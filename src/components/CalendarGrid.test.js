import React from "react";
import {Provider} from "react-redux";
import {shallow, mount} from "enzyme";
import CalendarGrid from "./CalendarGrid";
import CalendarCell from "./CalendarCell";
import {store} from "../helpers/store";
import testData from "../test-data";
import refreshEvents from "../actions/events.action";


describe("<CalendarGrid>", () => {

    store.dispatch(actions)
    const calendar = mount(<Provider store={store}><CalendarGrid /></Provider>).dive();


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
