import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const rootReducers = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export default rootReducers;
