import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {calendarActions} from "../actions/calendar.action";

class DateRangeBrowser extends React.Component {
    constructor(props) {
        super(props);

        this.gotoNextMonth = this.gotoNextMonth.bind(this);
    }

    gotoNextMonth() {
        let currentMonth = this.props.calendar.currentMonth;
        this.props.dispatch(calendarActions.gotoNextMonth(currentMonth));
    }

    render() {
        return (
            <div className="DateRangeBrowser">
                <div className="button">&lt;</div>
                <div className="button">Today</div>
                <div className="button" onClick={this.gotoNextMonth}>&gt;</div>
            </div>
        );
    }
};

DateRangeBrowser.propTypes = {
    dispatch: PropTypes.func,
    calendar: PropTypes.object
};

const mapStateToProps = (store) => {
    return {
        dispatch: store.dispatch,
        calendar: store.calendar
    };
};

export default connect(mapStateToProps)(DateRangeBrowser);
