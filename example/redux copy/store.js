import {combineReducers, legacy_createStore} from 'redux';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducers';

// store oluşturmak için kullanırız. createStore ile de yapılır.
const store = legacy_createStore(
  // reducersları store içinde birleştirmek için kullanırız.
  combineReducers({
    cart: cartReducer,
    product: productReducer,
  }),
);

export default store;
