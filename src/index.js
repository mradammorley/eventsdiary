import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import data from "./test-data";
import {store} from "./helpers/store";

import App from "./components/App";

ReactDOM.render(
    <Provider store={store}>
        <App data={data}/>
    </Provider>,
    document.getElementById('root')
);

export default store;


