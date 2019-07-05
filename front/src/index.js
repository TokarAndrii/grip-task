import React from 'react';
import ReactDOM from 'react-dom';
import App from './domains/app/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './domains/app/store';
import routes from './configs/routes';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} path={routes.INDEX}></Route>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
