import React from "react";
import {getMonthName} from "../Utils";
import PropTypes from "prop-types";


class DisplayDateRange extends React.Component  {
    render() {
        return (
            <div className='DisplayDateRange'>
                {getMonthName(this.props.referenceDate)}<span
                className="light-text">{" " + this.props.referenceDate.getFullYear()}</span>
            </div>
        );
    }
};

DisplayDateRange.propTypes = {
    referenceDate: PropTypes.instanceOf(Date)
};

export default DisplayDateRange;
