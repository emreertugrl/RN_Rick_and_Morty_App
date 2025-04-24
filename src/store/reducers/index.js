import {combineReducers} from 'redux';
import characterReducers from './characterReducers';

const rootReducers = combineReducers({
  characters: characterReducers,
});

export default rootReducers;
