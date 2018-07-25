import React from 'react';
import DisplayDateRange from './DisplayDateRange';
import DateRangeSelector from './DateRangeSelector';
import DateRangeBrowser from './DateRangeBrowser';
import AccountTools from './AccountTools';

const Toolbar = () => {
	return (
		<div className='Toolbar'>
			<DisplayDateRange />
			<DateRangeSelector />
			<DateRangeBrowser />
			<AccountTools />
		</div>
	)
};

export default Toolbar;
