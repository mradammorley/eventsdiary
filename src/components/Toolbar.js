import React from 'react';
import DisplayDateRange from './DisplayDateRange';
import DateRangeSelector from './DateRangeSelector';
import DateRangeBrowser from './DateRangeBrowser';
import AccountTools from './AccountTools';
import {connect} from "react-redux";
import PropTypes from "prop-types";


class Toolbar extends React.Component  {
    render() {
        return (
            <div className='Toolbar'>
                <DisplayDateRange referenceDate={ new Date(this.props.calendar.currentYear, this.props.calendar.currentMonth) }/>
                <DateRangeSelector/>
                <DateRangeBrowser/>
                <AccountTools/>
            </div>
        );
    }
};

Toolbar.propTypes = {
    calendar: PropTypes.object
};

const mapStateToProps = (state) => {
    return {calendar: state.calendar};
};

export default connect(mapStateToProps)(Toolbar);
