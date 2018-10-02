import React from "react";
import { Provider, connect } from "react-redux";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import MonthSelector from "./MonthSelector";
import { mapStateToProps } from './MonthSelector';

describe("MonthSelector component", () => {
    const initialState = {
        calendar: {}
    };
    const mockStore = configureStore();
    let store, mountedComponent;

    beforeEach(() => {
        store = mockStore(initialState);
        mountedComponent = mount(
            <Provider store={store}><MonthSelector /></Provider>,
        );
    });

    it("Should render successfully", () => {
        expect(mountedComponent.exists()).toEqual(true);
    });

    it("Should have a prop that matches initialState", () => {
        console.log(mountedComponent.find(MonthSelector).prop("store"));
        expect(mountedComponent.find(MonthSelector).prop("testProp")).toEqual(initialState.calendar);
    });

    it("Should render a div with className MonthSelector which has 3 children", () => {
        expect(mountedComponent.find('div.MonthSelector').children()).toHaveLength(3);
    });

});