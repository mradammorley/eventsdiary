import React from 'react';
import ReactDOM from 'react-dom';
import data from './test-data';

import App from './components/App';

ReactDOM.render (
	<App data={data}/>,
	document.getElementById('root')
);


