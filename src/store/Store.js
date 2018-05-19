import { createStore , applyMiddleware} from 'redux'
import { combineReducers } from 'redux'
import bioInfo from '../reducers/bioInfo'
import thunk from 'redux-thunk';

const TaskSmart = combineReducers({
    bioInfo
});

const store = createStore(TaskSmart,applyMiddleware(thunk))

export default store