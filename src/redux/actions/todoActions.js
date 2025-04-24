import {ADD_TODO} from './actionTypes';

export const addTodo = text => {
  console.log(text);
  return {
    type: ADD_TODO,
    payload: text,
  };
};
