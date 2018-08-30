import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import reduxPromise from './middleware/redux_promise';
import no_thinking from './middleware/no_thinking';

const store = createStore(rootReducer, {/*default or preloaded state*/}, applyMiddleware(no_thinking, reduxPromise));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
