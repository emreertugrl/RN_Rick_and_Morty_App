import {FETCH_TO_CART} from '../actions/actionTypes';

const initialState = {
  carts: [],
};

// state dışarıdaki güncellenecek olan state son halidir.
// action dışarıdan reducers gelen emirlerdir.
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TO_CART:
      return {...state, carts: [...state?.carts, action.payload]};
    default:
      return state;
  }
};

export default cartReducer;
