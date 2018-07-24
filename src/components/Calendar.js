import React from 'react';
import PropTypes from 'prop-types';

const Calendar = ({ message }) => {
    return (
        <div className='Calendar'>
            { message }
        </div>
    );
}

Calendar.propTypes = {
	message: PropTypes.string
};

export default Calendar;