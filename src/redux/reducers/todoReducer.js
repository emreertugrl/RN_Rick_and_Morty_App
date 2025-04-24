import {ADD_ITEM, REMOVE_ITEM} from '../types/todoTypes';

const initialState = {
  todoList: [],
};

// state dışarıdaki güncellenecek olan state son halidir.
// action dışarıdan reducers gelen emirlerdir.
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
