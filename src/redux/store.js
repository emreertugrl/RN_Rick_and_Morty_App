import {combineReducers, legacy_createStore} from 'redux';
import todoReducer from './reducers/todoReducer';
import counterReducer from './reducers/counterReducer';

// store oluşturmak için kullanırız. createStore ile de yapılır.
const store = legacy_createStore(
  // reducersları store içinde birleştirmek için kullanırız.
  combineReducers({
    todos: todoReducer,
    counter: counterReducer,
  }),
);

export default store;
