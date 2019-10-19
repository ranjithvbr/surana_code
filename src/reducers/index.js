import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import playReducer from '../playground/playReducer';


export default history => combineReducers({
    router: connectRouter(history),
    form: formReducer,
    nameReducer: playReducer
});