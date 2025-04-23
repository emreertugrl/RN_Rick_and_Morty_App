import {FETCH_TO_PRODUCT} from '../actions/actionTypes';

const initialState = {
  products: [],
};

// state dışarıdaki güncellenecek olan state son halidir.
// action dışarıdan reducers gelen emirlerdir.
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TO_PRODUCT:
      // console.log('reducer ', action);
      return {...state, products: action?.payload};

    default:
      return state;
  }
};

export default productReducer;
