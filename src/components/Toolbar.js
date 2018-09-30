import React from 'react';
import DisplayDateRange from './DisplayDateRange';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';
import AccountTools from './AccountTools';
import {connect} from "react-redux";
import PropTypes from "prop-types";


class Toolbar extends React.Component  {
    render() {
        return (
            <div className='Toolbar'>
                <DisplayDateRange referenceDate={ new Date(this.props.calendar.currentYear, this.props.calendar.currentMonth) }/>
                <MonthSelector/>
                <YearSelector/>
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
