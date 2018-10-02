import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import MonthSelector from "./MonthSelector";

describe("MonthSelector component", () => {
    const initialState = {
        calendar: {
            currentMonth: 9
        }
    };
    const mockStore = configureStore();
    let store, component;

    beforeEach(() => {
        store = mockStore(initialState);
        component = shallow(
            <MonthSelector store={store}/>,
        );
    });

    it("Should render successfully", () => {
        expect(component.exists()).toEqual(true);
    });

    it("Should show calendar initial state", () => {
        expect(component.props().calendar).toEqual({
            currentMonth: 9
        });
    });

});