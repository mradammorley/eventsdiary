import React from 'react';
import Utils from '../Utils';

const _utils = new Utils;

let dbCurrentdate = new Date();

const DisplayDateRange = () => {
    return (
        <div className='DisplayDateRange'>
            {_utils.getMonthName(dbCurrentdate)}<span className="light-text">{" " + _utils.getYearName(dbCurrentdate)}</span>
        </div>
    );
};

export default DisplayDateRange;
