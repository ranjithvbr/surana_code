import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const history = createBrowserHistory();

export default () => {
    const store = createStore(
        createRootReducer(history),
        composeEnhancers(applyMiddleware(
            routerMiddleware(history),
            thunk,
        )),
    );
    return store;
};
