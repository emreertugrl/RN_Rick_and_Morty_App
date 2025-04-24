import {ADD_ITEM, REMOVE_ITEM} from '../types/todoTypes';

export const addItem = value => {
  return async dispatch => {
    dispatch({
      type: ADD_ITEM,
      payload: value,
    });
  };
};

export const removeItem = value => {
  console.log(value);
  return async dispatch => {
    dispatch({
      type: REMOVE_ITEM,
      payload: value.id,
    });
  };
};
