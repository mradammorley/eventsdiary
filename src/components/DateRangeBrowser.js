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
        this.props.dispatch(calendarActions.gotoNextMonth());
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
    dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
    return {dispatch: state.dispatch};
};

export default connect(mapStateToProps)(DateRangeBrowser);
