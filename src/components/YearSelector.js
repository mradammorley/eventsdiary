import React from "react";
import {getThisYear} from "../helpers/date.helper";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {calendarActions} from "../actions/calendar.action";

class YearSelector extends React.Component {
    constructor(props) {
        super(props);

        this.gotoThisYear = this.gotoThisYear.bind(this);
        this.gotoNextYear = this.gotoNextYear.bind(this);
        this.gotoPreviousYear = this.gotoPreviousYear.bind(this);
    }

    gotoThisYear() {
        this.props.dispatch(calendarActions.gotoYear(getThisYear()));
    }

    gotoNextYear() {
        this.props.dispatch(calendarActions.gotoNextYear(this.props.calendar.currentYear));
    }

    gotoPreviousYear() {
        this.props.dispatch(calendarActions.gotoPreviousYear(this.props.calendar.currentYear));
    }

    render() {
        return (
            <div className="YearSelector">
                <div className="button" onClick={this.gotoPreviousYear}>&lt;</div>
                <div className="button" onClick={this.gotoThisYear}>This year</div>
                <div className="button" onClick={this.gotoNextYear}>&gt;</div>
            </div>
        );
    }
};

YearSelector.propTypes = {
    dispatch: PropTypes.func,
    calendar: PropTypes.object
};

const mapStateToProps = (store) => {
    return {
        dispatch: store.dispatch,
        calendar: store.calendar
    };
};

export default connect(mapStateToProps)(YearSelector);
