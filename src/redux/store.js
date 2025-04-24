import {applyMiddleware, createStore} from 'redux';
import rootReducers from './reducers';
import {thunk} from 'redux-thunk';

// store oluşturmak için kullanırız. createStore ile de yapılır.
// reducersları store içinde birleştirmek için kullanırız.
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;

/*
 * applyMiddleware thunk'ı store'a eklemek için kullanılır.
 * Redux thunk, API çağrıları gibi asenkron işlemleri yönetmemizi sağlar.
 */
