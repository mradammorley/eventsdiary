import React from "react";
import {getThisMonth, getThisYear} from "../helpers/date.helper";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {calendarActions} from "../actions/calendar.action";

class MonthSelector extends React.Component {
    constructor(props) {
        super(props);

        this.gotoThisMonth = this.gotoThisMonth.bind(this);
        this.gotoNextMonth = this.gotoNextMonth.bind(this);
        this.gotoPreviousMonth = this.gotoPreviousMonth.bind(this);
    }

    gotoThisMonth() {
        this.props.dispatch(calendarActions.gotoMonth(getThisMonth(), getThisYear()));
    }

    gotoNextMonth() {
        this.props.dispatch(calendarActions.gotoNextMonth(this.props.calendar.currentMonth, this.props.calendar.currentYear));
    }

    gotoPreviousMonth() {
        this.props.dispatch(calendarActions.gotoPreviousMonth(this.props.calendar.currentMonth, this.props.calendar.currentYear));
    }

    render() {
        return (
            <div className="DateRangeBrowser">
                <div className="button" onClick={this.gotoPreviousMonth}>&lt;</div>
                <div className="button" onClick={this.gotoThisMonth}>This Month</div>
                <div className="button" onClick={this.gotoNextMonth}>&gt;</div>
            </div>
        );
    }
};

MonthSelector.propTypes = {
    dispatch: PropTypes.func,
    calendar: PropTypes.object
};

const mapStateToProps = (store) => {
    return {
        dispatch: store.dispatch,
        calendar: store.calendar
    };
};

export default connect(mapStateToProps)(MonthSelector);
